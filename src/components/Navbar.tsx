import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme, tokens } from "../context/ThemeContext";
import { NAV_LINKS } from "../constants/portfolioData";
// @ts-ignore
import logoSvg from "../assets/images/devtea.svg";

export const Navbar = () => {
    const { dark, toggle } = useTheme();
    const t = dark ? tokens.dark : tokens.light;
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={
                "fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b " +
                t.border + " " +
                (scrolled ? t.bgHeaderScrolled + " backdrop-blur-md" : t.bgHeader)
            }
        >
            <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
                <a href="#home" className="flex items-center group">
                    <img
                        src={logoSvg}
                        alt="devTea Logo"
                        className={`h-8 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${!dark ? "drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)] filter" : ""
                            }`}
                    />
                </a>

                <div className="hidden md:flex items-center gap-9">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            className={
                                "text-sm transition-colors " +
                                (dark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                            }
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={toggle}
                        aria-label="Toggle dark / light mode"
                        className={
                            "w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 " +
                            t.border + " " +
                            (dark ? "text-amber-300 hover:bg-gray-800" : "text-purple-600 hover:bg-purple-50")
                        }
                    >
                        {dark ? <Sun size={17} /> : <Moon size={17} />}
                    </button>
                    <a
                        href="#contact"
                        className="text-sm font-semibold px-5 py-2.5 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300"
                    >
                        Resume
                    </a>
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggle}
                        aria-label="Toggle dark / light mode"
                        className={
                            "w-9 h-9 rounded-full border flex items-center justify-center " +
                            t.border + " " + (dark ? "text-amber-300" : "text-purple-600")
                        }
                    >
                        {dark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                    <button
                        onClick={() => setOpen((o) => !o)}
                        className={(dark ? "text-gray-200" : "text-gray-700") + " p-2"}
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {open && (
                <div className={"md:hidden border-t px-6 py-6 flex flex-col gap-5 " + t.border + " " + t.bgHeader}>
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className={dark ? "text-gray-200 text-base" : "text-gray-700 text-base"}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="text-center mt-2 text-sm font-semibold px-5 py-3 rounded-full border border-purple-500 text-purple-400"
                    >
                        Resume
                    </a>
                </div>
            )}
        </header>
    );
};