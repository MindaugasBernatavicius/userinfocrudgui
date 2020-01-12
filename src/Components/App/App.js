import React from 'react';
import './App.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Users from "../Users/Users";
import HomePage from "../HomePage/HomePage";
import About from "../About/About";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/about' component={About} />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;