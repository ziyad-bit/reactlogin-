import React, { Component } from "react";
import { getItem, getProfile, postComment, getComment } from "./AdminsFunction";

import "../../css/Admins/itemDetails.css";

class ItemDetails extends Component {
    state = {
        items_name : "",
        status     : "",
        description: "",
        created_at : "",
        price      : "",

        admins_name: "",
        admins_id  : '',

        auth_name: "",

        comments: "",
        comment : []
    };

    componentDidMount() {
        const items_id = this.props.match.params.id;

        getItem(items_id).then(res => {
            this.setState({
                items_name: res.data.name,

                status: res.data.status,
                description: res.data.description,

                price: res.data.price,
                items_image: res.data.image,
                created_at: res.data.created_at
            });
        });

        getProfile().then(res => {
            this.setState({
                auth_name: res.data.admins.name,

                auth_image: res.data.admins.image
            });
        });

        getComment(items_id).then(res => {
            
            this.setState({
                comment: res.data
                
            });
        });
    }

    

    changeState = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitState = e => {
        e.preventDefault();

        const newComment = {
            comments: this.state.comments,
            admins_id: this.state.admins_id,
            items_id: this.state.items_id
        };

        postComment(newComment).then(res => {
            this.setState({
                comments: ""
            });
        });
    };

    render() {
        return (
            <div>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img
                                src={
                                    "/images/Admins/items/" +
                                    this.state.items_image
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
                                <li className="list-group-item ">
                                    <span className="group3">name</span>:
                                    <span className="list2">
                                        {this.state.items_name}
                                    </span>
                                </li>

                                <li className="list-group-item  ">
                                    <span className="group6">description</span>:
                                    <span className="list2">
                                        {this.state.description}
                                    </span>
                                </li>
                                <li className="list-group-item ">
                                    <span className="group4">status</span>:
                                    {this.state.status == 1 ? (
                                        <span className="sp">New </span>
                                    ) : null}
                                    {this.state.status == 2 ? (
                                        <span className="sp">used </span>
                                    ) : null}
                                    {this.state.status == 3 ? (
                                        <span className="sp">very old </span>
                                    ) : null}
                                </li>
                                <li className="list-group-item ">
                                    <span className="group5"> created at</span>:
                                    <span className="list3">
                                        {this.state.created_at}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row image_comment">
                    <div className="col-md-3 image">
                        <img
                            src={
                                "/images/Admins/profile/" +
                                this.state.auth_image
                            }
                            alt="..."
                            className="rounded-circle"
                        />
                        <div>{this.state.auth_name}</div>
                    </div>

                    <div className="col-md-9 comment">
                        <form onSubmit={this.submitState}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">
                                    Comment
                                </label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    value={this.state.postComments}
                                    name="comments"
                                    onChange={this.changeState}
                                />
                            </div>
                            <input
                                className="btn btn-info"
                                type="submit"
                                value="add comment"
                            ></input>
                        </form>
                    </div>
                </div>

                <hr />

                <div className="row image_comment">
                    {this.state.comment.map(com => {
                        return (
                            <div key={com.comment_id}>
                                <div className="col-md-3 image">
                                    <img
                                        src={
                                            "/images/Admins/profile/" +
                                            this.state.admins_image
                                        }
                                        alt="..."
                                        className="rounded-circle"
                                    />
                                    <div>{this.state.admins_name}</div>
                                </div>

                                <div className="col-md-9 comment">
                                    <span> {com.comments} </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ItemDetails;
