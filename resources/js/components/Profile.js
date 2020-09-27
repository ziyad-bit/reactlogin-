import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { deleteItem, getProfile } from "./AdminsFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/Admins/profile.css";

class Profile extends Component {
    state = {
        name: "",
        email: "",
        birthDate: "",
        id: "",
        created_at: "",

        items: []
    };

    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                name: res.data.admins.name,
                email: res.data.admins.email,
                
                id: res.data.admins.id,
                created_at: res.data.admins.date,
                image: res.data.admins.image,

                items: res.data.admins_items
            });
        });
    }

    delete = id => {
        deleteItem(id).then(res => {
            let items = this.state.items;
            for (let index = 0; index < items.length; index++) {
                if (items[index].id == id) {
                    items.splice(index, 1);
                    this.setState({
                        items
                    });
                }
            }
        });
    };

    render() {
        const profile = (
            <div>
                <Link to={"/add/photo"} className="btn btn-info photo">
                <FontAwesomeIcon icon="edit" />
                    Edit photo
                </Link>
                <Link to={"/Admin/update"} className="btn btn-info btn_edit" >
                <FontAwesomeIcon icon="edit" />
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
                                    <span className="group1">name</span>:
                                    {this.state.name}
                                </li>

                                <li className="list-group-item items_list ">
                                    <span className="group1">email</span>:
                                    {this.state.email}
                                </li>
                                
                                <li className="list-group-item items_list">
                                    <span className="group2"> created at</span>:
                                    {this.state.created_at}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr />

                <h3 className="text-center"> My items </h3>
                <div className="row">
                    {this.state.items.map(item => {
                        return (
                            <div
                                className=" col-6 col-md-6 col-lg-4 "
                                key={item.id}
                            >
                                <button
                                    className="btn btn-danger delete"
                                    onClick={() => this.delete(item.id)}
                                >
                                    <FontAwesomeIcon icon="trash" />
                                    {" "}
                                    delete{" "}
                                </button>
                                <Link
                                
                                    className="btn btn-info btn_edi"
                                    to={
                                        "/item/edit/" +
                                        item.id
                                    }
                                >
                                    <FontAwesomeIcon icon="edit" />
                                    {" "}
                                    edit item{" "}
                                </Link>
                                <div
                                    className="card"
                                    style={{ width: "14rem" }}
                                >
                                    <span >{item.approve == 0 ? <span className='unapproved'>unapproved</span> : <span className='approved'>approved</span>}</span>
                                    <img
                                        src={
                                            "/images/Admins/items/" + item.image
                                        }
                                        className="card-img-top img"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {item.name}
                                        </h4>
                                        
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span>status</span> :{" "}
                                            {item.status == 1 ? (
                                                <span className="list">
                                                    New{" "}
                                                </span>
                                            ) : null}
                                            {item.status == 2 ? (
                                                <span className="list">
                                                    used{" "}
                                                </span>
                                            ) : null}
                                            {item.status == 3 ? (
                                                <span className="list">
                                                    very old{" "}
                                                </span>
                                            ) : null}
                                        </li>
                                        
                                        <li className="list-group-item">
                                            <span className="price">date</span>
                                            :{" "}
                                            <span className="list">
                                                {item.date}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            
                                            <Link to={'/item/details/' + item.id } className="btn btn-success btn_buy">
                                                details
                                            </Link>
                                            
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );

        return (
            <div>
                {localStorage.usertoken ? (
                    profile
                ) : (
                    <Redirect to={"/login"}></Redirect>
                )}
            </div>
        );
    }
}

export default Profile;
