import React, { Component } from "react";
import { getItem, getProfile, postComment, getComment } from "./AdminsFunction";
import { Link } from "react-router-dom";
import "../../css/Admins/itemDetails.css";

class ItemDetails extends Component {
    state = {
        items_name: "",
        status: "",
        description: "",
        created_at: "",
        price: "",

        admins: [],
        admin_name: "",
        admin_id:'',

        auth_name: "",
        auth_id: "",

        comments: "",
        admins_comments: []
    };

    componentDidMount() {
        const items_id = this.props.match.params.id;

        getItem(items_id).then(res => {
            this.setState({
                items_name: res.data.name,

                status: res.data.status,
                description: res.data.description,

                price: res.data.price,
                admin_id:res.data.admins_id,
                items_image: res.data.image,
                created_at: res.data.date
            });
        });

        getProfile().then(res => {
            this.setState({
                auth_name: res.data.admins.name,
                auth_id: res.data.admins.id,
                auth_image: res.data.admins.image
            });
        });

        getComment(items_id).then(res => {
            this.setState({
                admins_comments: res.data.admins_comments
            });
        });
    }

    componentDidUpdate() {
        console.log("updated");
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
            admins_id: this.state.auth_id,
            items_id: this.props.match.params.id
        };
        const items_id = this.props.match.params.id;
        getComment(items_id).then(res => {
            this.setState({
                admins_comments: res.data.admins_comments
            });
        });

        postComment(newComment).then(res => {
            if (res) {
                this.setState({
                    comments: ""
                });

                getComment(items_id).then(res => {
                    this.setState({
                        admins_comments: res.data.admins_comments
                    });
                });
            }
        });
    };

    render() {
        const btn = (
            <Link
                className="btn btn-info photo"
                to={"/item/edit/" + this.props.match.params.id}
            >
                {" "}
                edit item{" "}
            </Link>

            
        );

        
        return (
            <div>
                {this.state.auth_id == this.state.admin_id ? btn : null}
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
                        <div className="name">{this.state.auth_name}</div>
                    </div>

                    <div className="col-md-9 comment">
                        <form onSubmit={this.submitState}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">
                                    Comment
                                </label>
                                <textarea
                                    className="form-control area"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    value={this.state.comments}
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

                <h3 className="text-center">comments</h3>
                {this.state.admins_comments.map(admin_comment => {
                    return (
                        <div
                            className="row image_comment"
                            key={admin_comment.id}
                        >
                            <div>
                                <div className="col-md-3 image">
                                    <img
                                        src={
                                            "/images/Admins/profile/" +
                                            admin_comment.admins.image
                                        }
                                        alt="..."
                                        className="rounded-circle img"
                                    />
                                    <div className="name">
                                        {admin_comment.admins.name}
                                    </div>
                                </div>

                                <div className="col-md-9 comment">
                                    { admin_comment.comments }
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ItemDetails;
