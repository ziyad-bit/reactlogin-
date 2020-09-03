import React, { Component } from "react";
import { Link , Redirect } from "react-router-dom";
import { getProfile } from "./AdminsFunction";
import "../../css/Admins/profile.css";

class Profile extends Component {
    state = {
        name: "",
        email: "",
        birthDate: "",
        id: "",
        created_at: ""
    };

    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                name: res.admins.name,
                email: res.admins.email,
                birthDate: res.admins.birth_date,
                id: res.admins.id,
                created_at: res.admins.created_at,
                image: res.admins.image
            });
        });
    }

    render() {
        const profile = 
            <div>
                
                <Link
                    to={"/add/photo/" + this.state.id}
                    className="btn btn-info photo"
                >
                    Edit photo
                </Link>
                <Link
                    to={"/Admin/update/" + this.state.id}
                    className="btn btn-info photo"
                >
                    Edit profile
                </Link>

                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img
                                src={
                                    "/images/Admins/profile/" + this.state.image
                                }
                                className="card-img"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item active">
                                    <h4>information</h4>
                                </li>
                                <li className="list-group-item items_list">
                                    <span className="group">name</span>:
                                    {this.state.name}
                                </li>

                                <li className="list-group-item items_list ">
                                    <span className="group">email</span>:
                                    {this.state.email}
                                </li>
                                <li className="list-group-item items_list">
                                    <span className="group2">birth date</span>:
                                    {this.state.birthDate}
                                </li>
                                <li className="list-group-item items_list">
                                    <span className="group2"> created at</span>:
                                    {this.state.created_at}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        
        return (
            <div>
                {localStorage.usertoken
                    ? profile
                    : <Redirect to={'/login'}></Redirect>}
            </div>
        );
    }
}

export default Profile;
