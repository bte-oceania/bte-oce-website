import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Router, Route, Switch } from 'react-router';
import history from '../history';
import Home from './pages/home/Home';
import Showcase from './pages/Showcase'
import Team from './pages/Team';
import Apply from './pages/Apply';
import FAQ from './pages/FAQ'
import Login from './pages/Login';
import '../css/App.css';
import 'typeface-roboto';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';



const App = () => {

    library.add(fab);
    return(
        <div className="container">
            <Router history={history}>
                <div id="page">
                    <Header />
                    <Switch >
                        <Route path="/" exact component={Home} />
                        <Route path="/showcase" exact component={Showcase} />
                        <Route path="/team"  exact component={Team} />
                        <Route path="/apply" exact component={Apply} />
                        <Route path="/FAQ" exact component={FAQ} />
                        <Route path="/login" component={Login}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </div>
    );
}

export default App; 