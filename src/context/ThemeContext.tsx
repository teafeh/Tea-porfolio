import React, { createContext, useContext, useState } from "react";

export const tokens = {
    dark: {
        bg: "bg-gray-950",
        bgHeader: "bg-gray-950",
        bgHeaderScrolled: "bg-gray-950/90",
        surface: "bg-gray-900/40",
        border: "border-gray-800",
        borderHover: "hover:border-purple-500",
        text: "text-white",
        textBody: "text-gray-400",
        textMuted: "text-gray-500",
        heading: "text-white",
        sub: "text-sky-300",
        accent: "text-purple-400",
        accentStrong: "text-purple-300",
        ring: "shadow-2xl shadow-purple-900",
        photoBg: "bg-gray-900",
    },
    light: {
        bg: "bg-gray-50",
        bgHeader: "bg-gray-50",
        bgHeaderScrolled: "bg-gray-50/90",
        surface: "bg-white",
        border: "border-gray-200",
        borderHover: "hover:border-purple-400",
        text: "text-gray-900",
        textBody: "text-gray-600",
        textMuted: "text-gray-500",
        heading: "text-gray-900",
        sub: "text-sky-600",
        accent: "text-purple-600",
        accentStrong: "text-purple-600",
        ring: "shadow-xl shadow-purple-200",
        photoBg: "bg-white",
    },
};

const ThemeContext = createContext({ dark: true, toggle: () => { } });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [dark, setDark] = useState(true);
    const toggle = () => setDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);