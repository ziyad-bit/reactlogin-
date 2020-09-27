import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Admins/error404.css";
class Error404 extends Component {
    state = {};
    render() {
        return (
            <div className="alert alert-danger text-center">
                page not found
                <Link className="btn btn-info btn_home" to="/">
                    {" "}
                    back to home{" "}
                </Link>
            </div>
        );
    }
}

export default Error404;
