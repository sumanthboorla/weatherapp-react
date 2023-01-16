import React from 'react';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/App.css'
import CurrentWeather from './components/CurrentWeather';
import Weekweather from './components/Weekweather'
import City from './components/City';
import About from './components/About';
//import About from './About';
function Desktoproutes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Nav></Nav>
                    <CurrentWeather></CurrentWeather>
                    <Weekweather />
                </Route>
                <Route exact path='/Cities'>
                    <City></City>
                </Route>
                <Route exact path='/about'>
                    <Nav></Nav>
                    <About></About>
                </Route>
            </Switch>
        </Router>
    );
}

export default Desktoproutes;

