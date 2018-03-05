import React from 'react';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

export default () => (
    <Router>
        <Switch>
            <Route path='/:id?' component={require('../components/App').default} />
        </Switch>
    </Router>

)
