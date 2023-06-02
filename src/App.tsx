import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/works/Works";
import {Distant} from "./components/distant/Distant";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Distant/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
