import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faHome,
    faCalendarAlt,
    faBorderAll,
    faUser
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

import Add from "./Add";
import Items from "./Items";
import Photo from "./Photo";
import EditProfile from "./EditProfile";

library.add(fab, faHome, faCalendarAlt, faBorderAll, faUser);

class Example extends Component {
    render() {
        
        return (
            <Router>
                <div className="Example">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="container">
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/items" component={Items} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/add/photo/:id" component={Photo} />
                        <Route
                            exact
                            path="/Admin/update/:id"
                            component={EditProfile}
                        />
                        <Route exact path="/items/addform" component={Add} />
                        
                    </div>
                </div>
            </Router>
        );
    }
}

export default withRouter(Example);

if (document.getElementById("Example")) {
    ReactDOM.render(<Example />, document.getElementById("Example"));
}
