import React from "react";
import ReactDOM from "react-dom";
import Input from './Input';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Results from './Results';

require('../scss/main.scss');

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Input}/>
                    {/*<Route path="/results" component={Results}/>*/}
                    <Route path='results/:results' component={Results} />
                </Switch>
            </Router>
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById("app"));

