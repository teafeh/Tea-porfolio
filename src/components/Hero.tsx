import React from "react";
import { Mail } from "lucide-react";
import { useTheme, tokens } from "../context/ThemeContext";
// @ts-ignore
import profileImg from "../assets/images/profile.png";

export const Hero = () => {
    const { dark } = useTheme();
    const t = dark ? tokens.dark : tokens.light;

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/oladele-boluwatife-11ab32245",
            // Bootstrap Icon Path
            svg: (
                <path d="M0 1.146C0 .513.526 0 1.175 0h11.65C13.474 0 14 .513 14 1.146v11.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 14 0 13.487 0 12.854zm4.943 12.248V6.169H3.3V13.39h1.643zm-1.04-7.98c.571 0 1.015-.444 1.015-1.014s-.444-1.014-1.015-1.014a1.017 1.017 0 0 0-1.015 1.014c0 .57.444 1.014 1.015 1.014M12 13.39V9.3c0-2.19-.115-3.95-2.657-3.95-1.22 0-2.04.67-2.375 1.307h-.035V6.169H5.323v7.22h1.711V9.52c0-1.017.192-1.999 1.455-1.999 1.245 0 1.264 1.164 1.264 2.063v3.807z" />
            )
        },
        {
            name: "GitHub",
            href: "https://github.com/teafeh",
            // Bootstrap Icon Path
            svg: (
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            )
        }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
                <div>
                    <p className={"text-sm mb-4 " + t.sub}>Hello, I am</p>

                    <h1 className={"text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight " + (dark ? "text-purple-500" : "text-purple-600")}>
                        BOLUWATIFE
                        <br />
                        OLADELE
                    </h1>

                    <h2 className={"mt-6 text-xl sm:text-2xl font-semibold " + t.heading}>
                        Full-Stack Developer &amp; AI Automation Engineer
                    </h2>

                    <p className={"mt-5 max-w-xl text-base sm:text-lg leading-relaxed " + t.textBody}>
                        Based in Lagos/Ibadan, Nigeria, I build and design high-quality,
                        scalable web products. With a passion for clean code and
                        intelligent automation, I turn complex ideas into seamless,
                        production-ready systems.
                    </p>

                    <div className="mt-9 flex items-center gap-4">
                        {socialLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 rounded-full border border-purple-500 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300"
                            >
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 16 16">
                                    {link.svg}
                                </svg>
                            </a>
                        ))}
                        <a
                            href="mailto:techdevtea@gmail.com"
                            className="w-11 h-11 rounded-full border border-purple-500 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                    <a
                        href="#contact"
                        className="mt-8 inline-block px-8 py-3.5 rounded-full font-semibold bg-purple-500 text-white hover:bg-purple-400 transition-colors duration-300"
                    >
                        Get In Touch
                    </a>
                </div>

                <div className="relative mx-auto md:mx-0 w-72 h-72 sm:w-80 sm:h-80">
                    {/* The outer decorative ring */}
                    <div className={"absolute inset-0 rounded-full border-2 border-purple-500 " + t.ring} />

                    {/* The profile image wrapper */}
                    <div className={"absolute inset-2 rounded-full overflow-hidden flex items-center justify-center " + t.photoBg}>
                        <img
                            src={profileImg}
                            alt="Boluwatife Oladele"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};