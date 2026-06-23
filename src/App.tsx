import React from "react";
import { ThemeProvider, useTheme, tokens } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function MainLayout() {
    const { dark } = useTheme();
    const t = dark ? tokens.dark : tokens.light;

    return (
        <div className={`${t.bg} ${t.text} min-h-screen font-sans antialiased transition-colors duration-300`}>
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <MainLayout />
        </ThemeProvider>
    );
}