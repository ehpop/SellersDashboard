import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({children}: any) {
    return (
        <div className="App">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

export function appLoader() {
    return <></>;
}

export default App;
