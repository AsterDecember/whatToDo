import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Meetup from "./components/events/Meetup";

const Routes = () => (
    <Switch>

        <Route exact path='/login' component={Login}/>
        <Route exact path='/eventsM' component={Meetup}/>
        <Route exact path='/' component={Home}/>
    </Switch>
);

export default Routes;