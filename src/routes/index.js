import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignupPage from '../pages/SignupPage';

function RootRoute() {
    return (
        <Router>
            <Switch>
                <Route path='/signup' component={SignupPage} exact /> 
            </Switch>
        </Router>
    )
}

export default RootRoute