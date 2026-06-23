import React from "react";
import { useTheme, tokens } from "../context/ThemeContext";
import { SKILL_GROUPS } from "../constants/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";

export const Skills = () => {
    const { dark } = useTheme();
    const t = dark ? tokens.dark : tokens.light;

    return (
        <section id="skills" className="relative py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Toolbox"
                    title="Technical Skills"
                    sub="The languages, frameworks, and platforms I reach for when building and shipping products."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILL_GROUPS.map(({ title, icon: Icon, items }) => (
                        <Card key={title}>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                                    <Icon size={18} />
                                </span>
                                <h3 className={"font-semibold text-lg " + t.heading}>{title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className={
                                            "text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-300 cursor-default " +
                                            t.border + " " + t.surface + " " + t.textBody + " hover:border-purple-400 hover:text-purple-400"
                                        }
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};