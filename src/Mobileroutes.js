import React from 'react';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/App.css'
import About from './components/About';
import MobileCurrentWeather from './Mobile/MobileCurrentWeather';
import MobileCity from './Mobile/MobileCity';
//import About from './About';
function MobileRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Nav></Nav>
                    <MobileCurrentWeather />
                </Route>
                <Route exact path='/Cities'>
                    <MobileCity />
                </Route>
                <Route exact path='/about'>
                    <Nav></Nav>
                    <About></About>
                </Route>
            </Switch>
        </Router>
    );
}

export default MobileRoutes;

