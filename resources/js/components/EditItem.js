import React, { Component } from "react";

import { getItem } from "./AdminsFunction";
import { updateItem } from "./AdminsFunction";

class EditItem extends Component {
    state = {
        items_name: "",
        status: "",
        description: "",
        created_at: "",
        price: ""
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        getItem(id).then(res => {
            this.setState({
                items_name: res.data.name,
                status: res.data.status,
                description: res.data.description,

                price: res.data.price
            });
        });
    }

    change = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submit = e => {
        e.preventDefault();

        const id = this.props.match.params.id;
        const newitem = {
            items_name : this.state.items_name,
            status     : this.state.status,
            description: this.state.description,

            price: this.state.price
        };
        updateItem(id, newitem).then(res => {
            console.log(res);
        });
    };

    render() {
        return (
            <div className="container">
                <div
                    className="card text-white bg-info mb-3"
                    style={{ maxWidth: "350px" }}
                >
                    <div className="card-header">
                        <h3> Edit Item</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submit}>
                            <div className="form-group">
                                <label>name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="items_name"
                                    value={this.state.items_name}
                                    aria-describedby="emailHelp"
                                    onChange={this.change}
                                />
                            </div>
                            <div className="form-group">
                                <label>description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.description}
                                    name="description"
                                    onChange={this.change}
                                />
                            </div>

                            <div className="form-group">
                                <label>status</label>
                                <select
                                    type="text"
                                    className="form-control"
                                    name="status"
                                    onChange={this.change}
                                    value={this.state.status}
                                >
                                    <option value="1">new</option>
                                    <option value="2">used</option>
                                    <option value="3">very old</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.price || ""}
                                    name="price"
                                    onChange={this.change}
                                />
                            </div>

                            <button type="submit" className="btn btn-success">
                                Edit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditItem;
