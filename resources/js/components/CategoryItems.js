import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCategoryItems } from "./AdminsFunction";

class CategoryItems extends Component {
    state = {
        categories_items: [],
        category_name:''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        getCategoryItems(id).then(res => {
            this.setState({
                categories_items: res.data.category_items,
                category_name:res.data.category.name
            });
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> {this.state.category_name} </h1>
                <Link to={"/items/addform"} className="btn btn-info info ">
                    add items
                </Link>
                <div className="row">
                    {this.state.categories_items.map(category_item => {
                        return (
                            <div
                                className=" col-6 col-md-6 col-lg-4 "
                                key={category_item.id}
                            >
                                <div
                                    className="card"
                                    style={{ width: "14rem" }}
                                >
                                    <img
                                        src={
                                            "/images/Admins/items/" +
                                            category_item.image
                                        }
                                        className="card-img-top img"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            {category_item.name}
                                        </h3>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span className="list_span">
                                                status
                                            </span>{" "}
                                            :{" "}
                                            {category_item.status == 1 ? (
                                                <span className="list">
                                                    New{" "}
                                                </span>
                                            ) : null}
                                            {category_item.status == 2 ? (
                                                <span className="list">
                                                    used{" "}
                                                </span>
                                            ) : null}
                                            {category_item.status == 3 ? (
                                                <span className="list">
                                                    very old{" "}
                                                </span>
                                            ) : null}
                                        </li>
                                        
                                        <li className="list-group-item">
                                            <span className="list_span2">
                                                date
                                            </span>
                                            :{" "}
                                            <span className="list">
                                                $ {category_item.date}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <Link
                                                to={
                                                    "/item/details/" +
                                                    category_item.id
                                                }
                                                className="btn btn-success"
                                            >
                                                buy {category_item.price}
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
    }
}

export default CategoryItems;
