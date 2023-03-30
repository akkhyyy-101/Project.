import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import UserProfile from './UserProfile';

function Routes() {
    return (
        <Router>

            <Route exact path="/" component={Dashboard} />
            <Route path="/profile" component={UserProfile} />

        </Router>
    );
}

export default Routes;
