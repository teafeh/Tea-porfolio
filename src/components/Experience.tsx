import React from "react";
import { MapPin } from "lucide-react";
import { useTheme, tokens } from "../context/ThemeContext";
import { EXPERIENCE, EDUCATION } from "../constants/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";

export const Experience = () => {
    const { dark } = useTheme();
    const t = dark ? tokens.dark : tokens.light;

    return (
        <section id="experience" className="relative py-24 sm:py-28">
            <div className="max-w-5xl mx-auto px-5 sm:px-8">
                <SectionHeading
                    eyebrow="Journey"
                    title="Experience Timeline"
                    sub="From frontend internships to fintech backend systems and AI automation contracts."
                />

                <div className="relative pl-8 sm:pl-10">
                    <div className="absolute left-[3px] sm:left-[5px] top-2 bottom-2 w-px bg-purple-500/40" />

                    <div className="space-y-12">
                        {EXPERIENCE.map((job, i) => (
                            <div key={i} className="relative">
                                <span className="absolute -left-8 sm:-left-10 top-1.5 w-3 h-3 rounded-full bg-purple-500" />
                                <Card>
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div className="flex-1 min-w-[240px]">
                                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                                <h3 className={"text-lg sm:text-xl font-bold " + t.heading}>
                                                    {job.role}
                                                </h3>
                                                {/* Conditional verification link rendering */}
                                                {job.link && (
                                                    <a
                                                        href={job.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                                                    >
                                                        Verify Project
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                            <p className={"text-sm font-medium mt-0.5 " + t.accentStrong}>
                                                {job.company}
                                            </p>
                                        </div>
                                        <div className="text-right shrink-0 sm:block hidden">
                                            <p className={"text-xs " + t.sub}>{job.period}</p>
                                            <p className={"text-xs mt-0.5 flex items-center gap-1 justify-end " + t.textMuted}>
                                                <MapPin size={11} /> {job.location}
                                            </p>
                                        </div>
                                        {/* Mobile view adjustments for metadata alignment */}
                                        <div className="text-left w-full sm:hidden block mt-0.5">
                                            <p className={"text-xs inline-block mr-3 " + t.sub}>{job.period}</p>
                                            <p className={"text-xs inline-flex items-center gap-1 " + t.textMuted}>
                                                <MapPin size={11} /> {job.location}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 mt-2">
                                        {job.points.map((pt, idx) => (
                                            <li key={idx} className={"text-sm leading-relaxed flex gap-2.5 " + t.textBody}>
                                                <span className="text-purple-400 mt-1.5 shrink-0">▸</span>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className={"text-sm uppercase tracking-widest mb-6 text-center " + t.textMuted}>
                        Education
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-5">
                        {EDUCATION.map((ed) => (
                            <div
                                key={ed.title}
                                className={"rounded-xl border p-5 text-center transition-colors duration-300 hover:border-purple-400 " + t.border + " " + t.surface}
                            >
                                <p className={"text-sm font-semibold " + t.heading}>{ed.title}</p>
                                <p className={"text-xs mt-2 " + t.textMuted}>{ed.org}</p>
                                <p className={"text-xs mt-1 " + t.sub}>{ed.period}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};