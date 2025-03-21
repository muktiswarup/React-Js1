import { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Target the entire body except the navbar
        const appContent = document.querySelector("body");
        const navbar = document.querySelector(".navbar");

        if (appContent) {
            appContent.style.backgroundColor = theme === "light" ? "white" : "black";
            appContent.style.color = theme === "light" ? "black" : "white";
        }

        // Ensure the navbar retains its own fixed styles
        if (navbar) {
            navbar.style.backgroundColor = "#423030"; // Fixed light background
            navbar.style.color = "#000"; // Fixed light text color
        }
    }, [theme]);

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>
    );
};
