import React from 'react';
import Header from './Header';
import { Router, Route, Switch } from 'react-router';
import history from '../history';
import Home from './Home';
import BuildZones from './BuildZones'
import '../css/App.css';

const App = () => {
    return(
        <div className="container">
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch >
                        <Route path="/" exact component={Home} />
                        <Route path="/build-zones" component={BuildZones} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App; 