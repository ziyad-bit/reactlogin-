import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, withRouter  } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faHome,
    faCalendarAlt,
    faBorderAll,
    faUser,
    faEdit,
    faTrash,
    faPlus
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
import Category from "./Category";
import CategoryItems from "./CategoryItems";
import Error404 from "./Error404";

library.add(
    fab,
    faHome,
    faCalendarAlt,
    faBorderAll,
    faUser,
    faEdit,
    faTrash,
    faPlus
);

class Example extends Component {
    render() {
        return (
            <Router>
                <div className="Example">
                    <Navbar/>
                    
                    
                    <div className="container">
                    <Switch>
                    
                    <Route exact path="/" component={Landing} />
                    
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/category" component={Category} />
                        <Route exact path="/items" component={Items} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route
                            exact
                            path="/category/items/:id"
                            component={CategoryItems}
                        />
                        <Route
                            exact
                            path="/item/details/:id"
                            component={ItemDetails}
                        />
                        <Route
                            exact
                            path="/item/edit/:id"
                            component={EditItem}
                        />
                        <Route exact path="/add/photo" component={Photo} />
                        <Route
                            exact
                            path="/Admin/update"
                            component={EditProfile}
                        />

                        <Route exact path="/items/addform" component={Add} />
                        <Route exact path="/*" component={Error404} />
                        </Switch>
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
