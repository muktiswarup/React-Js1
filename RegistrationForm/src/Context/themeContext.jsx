import { createContext, useEffect, useState } from "react";

export const themeContext=createContext();

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('light');
    useEffect(()=>{
        document.body.style.backgroundColor=theme==='light'?'white':'black';
        document.body.style.color=theme==='light'?'dark':'white';
    },[theme])
    return(
        <themeContext.Provider value={{theme,setTheme}}>
            {children}
        </themeContext.Provider>
    )
}