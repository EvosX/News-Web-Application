import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({});

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}
