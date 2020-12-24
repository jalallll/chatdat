import React from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";

import Join from './Components/Join/Join';
import Landing from './Components/Landing/Landing';

const App = () => (
    <Router>
        <Route path="/" exact component={Landing} />

        
    </Router>
);

export default App;