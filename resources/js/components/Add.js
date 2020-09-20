import React, { Component } from "react";
import Select from "react-select";
import { addItems, getCategory } from "./AdminsFunction";
import "../../css/Admins/Add.css";

class Add extends Component {
    state = {
        name: "",
        description: "",
        price: "",
        status: 2,
        image: "",

        category: "",
        
        categories: []
    };

    componentDidMount() {
        getCategory().then(res => {
            this.setState({
                categories: res.data
            });
        });
    }

    

    changeState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    changeSelect = e => {
        this.setState({ category:e  ? e.value : '' });
    };

    changeStatePhoto = e => {
        this.setState({
            image: e.target.files[0]
        });
    };

    submit = e => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("image", this.state.image);
        formData.append("name", this.state.name);
        formData.append("description", this.state.description);
        formData.append("status", this.state.status);
        formData.append("category_id", this.state.category);
        formData.append("price", this.state.price);

        const id = this.props.id;
        addItems(formData, id).then(res => {
            this.setState({
                name: "",
                description: "",
                price: ""
            });
        });
    };

    render() {
        var array1 = this.state.categories;
        var technologyList = [];
        array1.forEach(function(element) {
            technologyList.push({ label: element.name, value: element.id });
        });

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
                                <label>category</label>

                                <Select
                                    name="category"
                                    onChange={this.changeSelect}
                                    value={technologyList.find(item=>item.value==='category')}
                                    className="select"
                                    options={technologyList}
                                />
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
