import {createContext, useContext, useState} from 'react';

const ThemeContext= createContext();
export const theme = ()=>{
    useContext(ThemeContext)
}
export const themeProvider =({child})=>{
    const [darkMode,setDarkmode]=useState(false);
    const toggleTheme=()=>{
        setDarkmode((prev)=>!prev)
    }
    const theme=darkMode?"dark":"light";
    return <ThemeContext.Provider value={{theme,toggleTheme}}>
        {child}
    </ThemeContext.Provider>
}