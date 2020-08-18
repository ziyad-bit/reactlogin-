import React, { Component } from "react";
import { addItems } from "./AdminsFunction";
import '../../css/Admins/Add.css'



class Add extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            price: "",
            status: ""
        };

        this.submit = this.submit.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const newItems = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            status: this.state.status
        };
        addItems(newItems).then(res => {
            this.setState({
                name: "",
                description: "",
                price: "",
                status: ""
            });
        });
    }

    changeState(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <div
                    class="card text-white bg-info mb-3"
                    style={{maxWidth : "350px"}}
                >
                    <div class="card-header"><h3>Add items</h3></div>
                    <div class="card-body">
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
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            name="description"
                            onChange={this.changeState}
                        />
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
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.status}
                            name="status"
                            onChange={this.changeState}
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
