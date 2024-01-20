import React, {useState} from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState<string>('light');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
