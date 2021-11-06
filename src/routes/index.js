import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignupPage from '../pages/SignupPage';
import LectureDetailPage from '../pages/LectureDetailPage';
import ProfilePage from '../pages/ProfilePage';
import LectureListPage from '../pages/LectureListPage';


function RootRoute() {
    return (
        <Router>
            <Switch>
                <Route path='/signup' component={SignupPage} exact /> 
                <Route path='/course/' component={LectureDetailPage} />
                <Route path='/settings/account' component={ProfilePage} />
                <Route path='/courses' component={LectureListPage} />
            </Switch>
        </Router>
    )
}

export default RootRoute