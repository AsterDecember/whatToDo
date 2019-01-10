import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const Routes = () => (

<Switch history={history}>

        <Route exact path='/' component={Home}/>

    </Switch>
);

export default Routes;