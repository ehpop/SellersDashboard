import React, {useContext, useEffect} from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Stack} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ThemeContext from "./context/ThemeContext";

function App({children}: any) {
    const {theme} = useContext(ThemeContext);
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);

        const favicon = document.getElementById("favicon");
        // @ts-ignore
        if (favicon !== null && favicon.href !== null) {
            // @ts-ignore
            favicon.href = theme === 'light'
                ? "logos/svg/logo-no-background.svg"
                : "logos/svg/logo-no-background-white.svg";
        }
    }, [theme]);
    return (
        <Stack className="App">
            <Header/>
            <Container fluid className="main-container">
                {children}
            </Container>
            <Footer/>
        </Stack>
    );
}

export function appLoader() {
    return <></>;
}

export default App;
