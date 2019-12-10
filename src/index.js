import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import TvShows from "./components/TvShows";
import Movies from "./components/Movies";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(

<Router>
    {/* <Switch>
        <Route path="/callback" component={Movies} />
        <Route path="/" component={TvShows} />
    </Switch> */}
    <App />
</Router>
, 

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
