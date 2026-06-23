import React from "react";
import { useTheme, tokens } from "../../context/ThemeContext";

interface HeadingProps { eyebrow: string; title: string; sub?: string; }

export const SectionHeading = ({ eyebrow, title, sub }: HeadingProps) => {
    const { dark } = useTheme();
    const t = dark ? tokens.dark : tokens.light;
    return (
        <div className="mb-12 text-center">
            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${t.sub}`}>
                {eyebrow}
            </p>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${t.accent}`}>
                {title}
            </h2>
            {sub && (
                <p className={`mt-4 max-w-2xl mx-auto text-sm sm:text-base ${t.textBody}`}>
                    {sub}
                </p>
            )}
        </div>
    );
};