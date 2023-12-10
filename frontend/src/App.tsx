import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from "./components/ThemeContext";

function App({children}: any) {
    const [theme, setTheme] = React.useState<string>('light');
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className="App">
                <Header/>
                {children}
                <Footer/>
            </div>
        </ThemeContext.Provider>
    );
}

export function appLoader() {
    return <></>;
}

export default App;
