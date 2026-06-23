import React from "react";
import { useTheme, tokens } from "../../context/ThemeContext";

export const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const { dark } = useTheme();
    const t = dark ? tokens.dark : tokens.light;
    return (
        <div className={`relative rounded-2xl border p-6 sm:p-8 transition-colors duration-300 ${t.border} ${t.surface} ${t.borderHover} ${className}`}>
            {children}
        </div>
    );
};