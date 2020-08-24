import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faHome,faCalendarAlt,faBorderAll } from '@fortawesome/free-solid-svg-icons'


import Navbar from "./Navbar";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

import Add from "./Add";
import Items from "./Items";


library.add(fab , faHome,faCalendarAlt,faBorderAll)

class Example extends Component {
    render() {
        return (
            <Router>
                <div className="Example">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/items/addform" component={Add} />
                        <Route exact path="/items" component={Items} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Example;

if (document.getElementById("Example")) {
    ReactDOM.render(<Example />, document.getElementById("Example"));
}
