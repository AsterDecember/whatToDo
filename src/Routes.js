import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Meetup from "./components/events/Meetup";
import EventsList from "./components/events/EventsList";
import EventDetail from "./components/events/EventDetail";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const Routes = () => (

<Switch history={history}>

        <Route exact path='/login' component={Login}/>
        <Route exact path='/eventsM' component={Meetup}/>
        <Route exact path='/events' component={EventsList}/>
        <Route exact path='/' component={Home}/>
        <Route path='/event/:id' component={EventDetail}/>

    </Switch>
);

export default Routes;