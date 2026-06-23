import React from "react";
import { Mail, Phone,} from "lucide-react";
import { useTheme, tokens } from "../context/ThemeContext";
import { SectionHeading } from "./ui/SectionHeading";

export const Contact = () => {
    const { dark } = useTheme();
    const t = dark ? tokens.dark : tokens.light;

    return (
        <section id="contact" className="relative py-24 sm:py-28">
            <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
                <SectionHeading
                    eyebrow="Let's talk"
                    title="Get In Touch"
                    sub="Have a fintech build, automation pipeline, or full-stack product in mind? I'm currently open to new collaborations."
                />

                <div className="grid sm:grid-cols-3 gap-5 mb-10">
                    <a
                        href="mailto:techdevtea@gmail.com"
                        className={"rounded-xl border p-6 transition-colors duration-300 hover:border-purple-400 flex flex-col items-center gap-3 " + t.border + " " + t.surface}
                    >
                        <Mail size={20} className="text-purple-400" />
                        <span className={"text-sm " + t.textBody}>techdevtea@gmail.com</span>
                    </a>
                    <a
                        href="tel:+2348051614609"
                        className={"rounded-xl border p-6 transition-colors duration-300 hover:border-purple-400 flex flex-col items-center gap-3 " + t.border + " " + t.surface}
                    >
                        <Phone size={20} className="text-purple-400" />
                        <span className={"text-sm " + t.textBody}>+234 805 161 4609</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/oladele-boluwatife-11ab32245"
                        target="_blank"
                        rel="noreferrer"
                        className={"rounded-xl border p-6 transition-colors duration-300 hover:border-purple-400 flex flex-col items-center gap-3 " + t.border + " " + t.surface}
                    >
                        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h11.65C13.474 0 14 .513 14 1.146v11.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 14 0 13.487 0 12.854zm4.943 12.248V6.169H3.3V13.39h1.643zm-1.04-7.98c.571 0 1.015-.444 1.015-1.014s-.444-1.014-1.015-1.014a1.017 1.017 0 0 0-1.015 1.014c0 .57.444 1.014 1.015 1.014M12 13.39V9.3c0-2.19-.115-3.95-2.657-3.95-1.22 0-2.04.67-2.375 1.307h-.035V6.169H5.323v7.22h1.711V9.52c0-1.017.192-1.999 1.455-1.999 1.245 0 1.264 1.164 1.264 2.063v3.807z" />
                        </svg>
                        <span className={"text-sm " + t.textBody}>LinkedIn Profile</span>
                    </a>
                </div>

                <a
                    href="mailto:techdevtea@gmail.com"
                    className="inline-block px-9 py-4 rounded-full font-semibold bg-purple-500 text-white hover:bg-purple-400 transition-colors duration-300"
                >
                    Say Hello
                </a>
            </div>

            <footer className={"mt-24 border-t pt-8 " + t.border}>
                <div className={"max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm " + t.textMuted}>
                    <p>© {new Date().getFullYear()} Boluwatife Oladele. Built with React & Tailwind.</p>
                        <div className="flex items-center gap-5">
                            <a href="https://github.com/teafeh" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" /></svg>
                            </a>
                            <a href="https://linkedin.com/in/oladele-boluwatife-11ab32245" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h11.65C13.474 0 14 .513 14 1.146v11.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 14 0 13.487 0 12.854zm4.943 12.248V6.169H3.3V13.39h1.643zm-1.04-7.98c.571 0 1.015-.444 1.015-1.014s-.444-1.014-1.015-1.014a1.017 1.017 0 0 0-1.015 1.014c0 .57.444 1.014 1.015 1.014M12 13.39V9.3c0-2.19-.115-3.95-2.657-3.95-1.22 0-2.04.67-2.375 1.307h-.035V6.169H5.323v7.22h1.711V9.52c0-1.017.192-1.999 1.455-1.999 1.245 0 1.264 1.164 1.264 2.063v3.807z" /></svg>
                            </a>
                            <a href="mailto:techdevtea@gmail.com" className="hover:text-purple-400 transition-colors">
                                <Mail size={18} />
                            </a>
                        </div>
                </div>
            </footer>
        </section>
    );
};