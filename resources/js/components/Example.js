import React , { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

import Add from "./Add";

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
