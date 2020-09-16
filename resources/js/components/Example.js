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
import { getProfile } from "./AdminsFunction";

import Add from "./Add";
import Items from "./Items";
import Photo from "./Photo";
import EditProfile from "./EditProfile";
import ItemDetails from "./ItemDetails";
import EditItem from "./EditItem";

library.add(fab, faHome, faCalendarAlt, faBorderAll, faUser);

class Example extends Component {
    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                id: res.data.admins.id
            });
        });
    }

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
                        <Route exact path="/item/details/:id" component={ItemDetails} />
                        <Route exact path="/item/edit/:id" component={EditItem} />
                        <Route
                            exact
                            path="/add/photo"
                            render={props => (
                                <Photo {...props} id={this.state.id} />
                            )}
                        />
                        <Route
                            exact
                            path="/Admin/update"
                            render={props => (
                                <EditProfile {...props} id={this.state.id} />
                            )}
                        />
                        <Route
                            exact
                            path="/items/addform"
                            render={props => (
                                <Add {...props} id={this.state.id} />
                            )}
                        />
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
