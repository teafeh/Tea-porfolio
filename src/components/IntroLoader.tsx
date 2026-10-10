import React, { useState, useEffect, useCallback, useRef } from "react";
import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

// Point dotlottie-web to the self-hosted WASM file in /public/wasm/
if (typeof window !== "undefined") {
    setWasmUrl("/wasm/dotlottie-player.wasm");
}

const STORAGE_KEY = "tea_intro_shown";
const FAILSAFE_TIMEOUT_MS = 9500;
const FADE_DURATION_MS = 700;

// Colors
// #511C92 -> [81, 28, 146]
// #232323 -> [35, 35, 35]
const COLOR_START = [81, 28, 146] as const;
const COLOR_END = [35, 35, 35] as const;

// Transition frame boundaries
const FRAME_START = 369.6;
const FRAME_END = 404.28;

/**
 * 1D Cubic Bezier solver for bezier(p1x, p1y, p2x, p2y) = bezier(0.5, 0, 0.5, 1).
 * Since p1x = 0.5 and p2x = 0.5:
 *   x(s) = 3*(1-s)^2*s*(0.5) + 3*(1-s)*s^2*(0.5) + s^3
 *        = 1.5*(s - s^2) + s^3
 * We solve for parameter `s` given `t` using Newton-Raphson, then compute y(s).
 */
function cubicBezier05(t: number): number {
    if (t <= 0) return 0;
    if (t >= 1) return 1;

    // Newton-Raphson iteration to find s where x(s) = t
    let s = t;
    for (let i = 0; i < 8; i++) {
        // x(s) = 3*(1-s)^2*s*0.5 + 3*(1-s)*s^2*0.5 + s^3
        //      = 1.5*(s - s^2) + s^3
        const currentX = 1.5 * (s - s * s) + s * s * s;
        const diff = currentX - t;
        if (Math.abs(diff) < 1e-5) break;
        // dx/ds = 1.5*(1 - 2s) + 3*s^2 = 1.5 - 3s + 3s^2
        const slope = 1.5 - 3 * s + 3 * s * s;
        if (Math.abs(slope) < 1e-5) break;
        s = s - diff / slope;
    }

    s = Math.max(0, Math.min(1, s));

    // y(s) with p1y = 0, p2y = 1:
    // y(s) = 3*(1-s)*s^2*1 + s^3 = 3*s^2 - 2*s^3
    return 3 * s * s - 2 * s * s * s;
}

function lerpColor(factor: number): string {
    const e = cubicBezier05(Math.max(0, Math.min(1, factor)));
    const r = Math.round(COLOR_START[0] + (COLOR_END[0] - COLOR_START[0]) * e);
    const g = Math.round(COLOR_START[1] + (COLOR_END[1] - COLOR_START[1]) * e);
    const b = Math.round(COLOR_START[2] + (COLOR_END[2] - COLOR_START[2]) * e);
    return `rgb(${r}, ${g}, ${b})`;
}

export const IntroLoader: React.FC = () => {
    // Check session storage immediately so we don't flash if already shown
    const [shouldRender, setShouldRender] = useState<boolean>(() => {
        try {
            if (typeof window !== "undefined") {
                const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
                if (alreadySeen) return false;

                // Check prefers-reduced-motion
                if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                    sessionStorage.setItem(STORAGE_KEY, "true");
                    return false;
                }
            }
        } catch {
            // Ignore sessionStorage failure
        }
        return true;
    });

    const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
    const [useCssTransitionFallback, setUseCssTransitionFallback] = useState<boolean>(false);
    const [cssFallbackColor, setCssFallbackColor] = useState<string>("#511C92");

    const overlayRef = useRef<HTMLDivElement | null>(null);
    const dotLottieRef = useRef<DotLottie | null>(null);
    const dismissedRef = useRef<boolean>(false);
    const frameEventsReceivedRef = useRef<number>(0);
    const cssFallbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const markFinishedAndExit = useCallback(() => {
        if (dismissedRef.current) return;
        dismissedRef.current = true;

        if (cssFallbackTimeoutRef.current) {
            clearTimeout(cssFallbackTimeoutRef.current);
            cssFallbackTimeoutRef.current = null;
        }

        try {
            sessionStorage.setItem(STORAGE_KEY, "true");
        } catch {
            // Storage unavailable or quota exceeded
        }

        setIsFadingOut(true);

        setTimeout(() => {
            setShouldRender(false);
        }, FADE_DURATION_MS);
    }, []);

    // Lock page scroll while overlay is mounted
    useEffect(() => {
        if (!shouldRender) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [shouldRender]);

    // Safety net failsafe timeout
    useEffect(() => {
        if (!shouldRender) return;

        const timer = setTimeout(() => {
            markFinishedAndExit();
        }, FAILSAFE_TIMEOUT_MS);

        return () => clearTimeout(timer);
    }, [shouldRender, markFinishedAndExit]);

    // Setup DotLottie instance and frame event listener
    const handleDotLottieRef = useCallback(
        (instance: DotLottie | null) => {
            dotLottieRef.current = instance;
            if (!instance) return;

            const onComplete = () => {
                if (overlayRef.current) {
                    overlayRef.current.style.backgroundColor = "#232323";
                }
                markFinishedAndExit();
            };

            const onLoadError = () => {
                markFinishedAndExit();
            };

            const onPlay = () => {
                // If no frame events are received within 400ms after play, start CSS fallback transition
                setTimeout(() => {
                    if (frameEventsReceivedRef.current === 0 && !dismissedRef.current) {
                        setUseCssTransitionFallback(true);
                        // Delay 6.16s after play, then transition to #232323 over 0.58s
                        cssFallbackTimeoutRef.current = setTimeout(() => {
                            if (!dismissedRef.current) {
                                setCssFallbackColor("#232323");
                            }
                        }, 6160);
                    }
                }, 400);
            };

            const onFrame = (e: { currentFrame?: number }) => {
                frameEventsReceivedRef.current++;
                const f = e.currentFrame ?? 0;

                if (overlayRef.current) {
                    if (f < FRAME_START) {
                        overlayRef.current.style.backgroundColor = "#511C92";
                    } else if (f >= FRAME_END) {
                        overlayRef.current.style.backgroundColor = "#232323";
                    } else {
                        const t = (f - FRAME_START) / (FRAME_END - FRAME_START);
                        overlayRef.current.style.backgroundColor = lerpColor(t);
                    }
                }
            };

            instance.addEventListener("complete", onComplete);
            instance.addEventListener("loadError", onLoadError);
            instance.addEventListener("play", onPlay);
            instance.addEventListener("frame", onFrame as any);
        },
        [markFinishedAndExit]
    );

    if (!shouldRender) {
        return null;
    }

    return (
        <div
            ref={overlayRef}
            aria-hidden="true"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 99999,
                backgroundColor: useCssTransitionFallback ? cssFallbackColor : "#511C92",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: isFadingOut ? 0 : 1,
                transition: isFadingOut
                    ? `opacity ${FADE_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
                    : useCssTransitionFallback
                    ? "background-color 580ms ease-in-out"
                    : "none",
                pointerEvents: isFadingOut ? "none" : "auto",
                overflow: "hidden",
            }}
        >
            <DotLottieReact
                src="/intro/tea_loader_clean.lottie"
                autoplay
                loop={false}
                layout={{ fit: "contain", align: [0.5, 0.5] }}
                dotLottieRefCallback={handleDotLottieRef}
                style={{
                    width: "100vw",
                    height: "100dvh",
                    display: "block",
                    backgroundColor: "transparent",
                }}
            />

            <button
                type="button"
                onClick={markFinishedAndExit}
                aria-label="Skip intro animation"
                style={{
                    position: "absolute",
                    bottom: "28px",
                    right: "28px",
                    zIndex: 100000,
                    padding: "8px 18px",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.9)",
                    backgroundColor: "rgba(0, 0, 0, 0.35)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: "9999px",
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    transition: "all 0.2s ease",
                    outline: "none",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
                    e.currentTarget.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.35)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.transform = "scale(1)";
                }}
                onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#ffffff";
                    e.currentTarget.style.boxShadow = "0 0 0 2px rgba(255, 255, 255, 0.5)";
                }}
                onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            >
                Skip
            </button>
        </div>
    );
};
