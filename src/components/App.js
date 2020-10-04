import React from 'react';
import Header from './Header';
import { Router, Route, Switch } from 'react-router';
import history from '../history';
import Home from './Home';
import BuildZones from './BuildZones'
import Team from './Team'
import '../css/App.scss';

const App = () => {
    return(
        <div className="container">
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch >
                        <Route path="/" exact component={Home} />
                        <Route path="/build-zones" component={BuildZones} />
                        <Route path="/the-team" component={Team} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App; 