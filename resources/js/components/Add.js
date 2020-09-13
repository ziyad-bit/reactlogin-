import React, { Component } from "react";
import { addItems } from "./AdminsFunction";
import "../../css/Admins/Add.css";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            status:2,
            image: "",
            
        };

        this.submit = this.submit.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    changeState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    changeStatePhoto = e => {
        this.setState({
            image: e.target.files[0]
        });
    };

    submit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", this.state.image);
        formData.append("name", this.state.name);
        formData.append("description", this.state.description);
        formData.append("status", this.state.status);
        formData.append("price", this.state.price);

        const id=this.props.id
        addItems(formData,id).then(res => {
            this.setState({
                name: "",
                description: "",
                price: "",
                
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div
                    className="card text-white bg-info mb-3"
                    style={{ maxWidth: "350px" }}
                >
                    <div className="card-header">
                        <h3>Add items</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submit}>
                            <div className="form-group">
                                <label>name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    aria-describedby="emailHelp"
                                    onChange={this.changeState}
                                />
                            </div>
                            <div className="form-group">
                                <label>description</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    value={this.state.description}
                                    name="description"
                                    onChange={this.changeState}
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label>price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.price}
                                    name="price"
                                    onChange={this.changeState}
                                />
                            </div>
                            <div className="form-group">
                                <label>status</label>
                                <select
                                    name="status"
                                    class="form-control"
                                    onChange={this.changeState}
                                    
                                >
                                    <option value="1">new</option>
                                    <option value="2">used</option>
                                    <option value="3">very old</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>photo</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="image"
                                    onChange={this.changeStatePhoto}
                                />
                            </div>

                            <button type="submit" className="btn btn-success">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;
