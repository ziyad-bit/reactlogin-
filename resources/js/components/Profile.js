import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "./AdminsFunction";
import "../../css/Admins/profile.css";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            birthDate: ""
        };
    }

    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                name: res.admins.name,
                email: res.admins.email,
                birthDate: res.admins.birth_date,
                id: res.admins.id
            });
        });
    }

    render() {
        return (
            <div>
                <Link to={"/add/photo/" + this.state.id} className='btn btn-info photo'>Edit photo</Link>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="..." className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item active">
                                    <h4>information</h4>
                                </li>
                                <li className="list-group-item ">
                                    <span className="group">name</span>:
                                    {this.state.name}
                                </li>

                                <li className="list-group-item ">
                                    <span className="group">email</span>:
                                    {this.state.email}
                                </li>
                                <li className="list-group-item">
                                    <span className="group2">birth date</span>:
                                    {this.state.birthDate}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
