import React, { useState } from "react";
import { ArrowUpRight, } from "lucide-react";
import { useTheme, tokens } from "../context/ThemeContext";
import { PROJECTS } from "../constants/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";

interface ProjectItem {
    tag: string;
    name: string;
    link: string;
    description: string;
    highlights: string[];
    stack: string[];
}

const ProjectCard = ({ project }: { project: ProjectItem }) => {
    const { dark } = useTheme();
    const t = dark ? tokens.dark : tokens.light;
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={
                "group relative rounded-2xl border p-7 sm:p-8 transition-colors duration-300 hover:border-purple-500 " +
                t.border + " " + t.surface
            }
        >
            <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                    <p className={"text-xs uppercase tracking-wider " + t.sub}>{project.tag}</p>
                    <h3 className={"text-2xl font-bold mt-1 " + t.heading}>{project.name}</h3>
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={
                        "shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 group-hover:text-purple-400 group-hover:border-purple-400 " +
                        t.border + " " + t.textBody
                    }
                >
                    <ArrowUpRight size={17} />
                </a>
            </div>

            <p className={"text-sm leading-relaxed mb-4 " + t.textBody}>{project.description}</p>

            <ul className="space-y-2 mb-5">
                {project.highlights.map((h, i) => (
                    <li key={i} className={"text-sm flex gap-2.5 leading-relaxed " + t.textBody}>
                        <span className="text-purple-400 mt-1 shrink-0">◆</span>
                        <span>{h}</span>
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                    <span
                        key={s}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-400/20 text-purple-400"
                    >
                        {s}
                    </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
                <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                View on GitHub
                <span className={"transition-transform duration-300 " + (hover ? "translate-x-1" : "")}>→</span>
            </a>
        </div>
    );
};

export const Projects = () => (
    <section id="projects" className="relative py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <SectionHeading
                eyebrow="Built things"
                title="Projects"
                sub="Selected work spanning fintech infrastructure and full-stack applications."
            />
            <div className="grid sm:grid-cols-2 gap-7">
                {PROJECTS.map((p) => (
                    <ProjectCard key={p.name} project={p} />
                ))}
            </div>
        </div>
    </section>
);