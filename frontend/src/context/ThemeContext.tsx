import React from "react";

export interface IThemeContext {
    theme: string;
    setTheme: (value: React.SetStateAction<string>) => void;
}

const ThemeContext = React.createContext<IThemeContext>({
    theme: "",
    setTheme: () => {}
});

export default ThemeContext;