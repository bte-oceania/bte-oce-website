import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Router, Route, Switch } from 'react-router';
import history from '../history';
import Home from './pages/Home';
import Showcase from './pages/BuildZones'
import Team from './pages/Team'
import '../css/App.scss';
import 'typeface-roboto';



const App = () => {
    return(
        <div className="container">
            <Router history={history}>
                <div id="page">
                    <Header/>
                    <Switch >
                        <Route path="/" exact component={Home} />
                        <Route path="/showcase" component={Showcase} />
                        <Route path="/the-team" component={Team} />
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </div>
    );
}

export default App; 