import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from "./context/ThemeContext";
import {Stack} from "react-bootstrap";

function App({children}: any) {
    const [theme, setTheme] = React.useState<string>('light');

    useEffect(() => {
        // Update the data-bs-theme attribute on the HTML element
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Stack className="App">
                <Header/>
                {children}
                <Footer/>
            </Stack>
        </ThemeContext.Provider>
    );
}

export function appLoader() {
    return <></>;
}

export default App;
