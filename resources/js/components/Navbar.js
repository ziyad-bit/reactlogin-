import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../css/Admins/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem("usertoken");
        this.props.history.push(`/`);
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        );

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link to="/profile" className="nav-link">
                    <span className='profile'>profile</span>
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link to="/profile" className="nav-link">
                    <FontAwesomeIcon icon="border-all" />
                    <span className='categories'>categories</span>
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link to="/items" className="nav-link">
                        <FontAwesomeIcon icon="calendar-alt" />
                        <span className='items'>items</span>
                    </Link>
                </li>
                <li className="nav-item ">
                    <a
                        href="/"
                        onClick={this.logOut.bind(this)}
                        className="nav-link"
                    >
                        Logout
                    </a>
                </li>
            </ul>
        );

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active home">
                            <Link class="nav-link" to="/">
                                <FontAwesomeIcon icon="home" />
                                Home <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);
