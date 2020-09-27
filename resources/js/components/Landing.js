import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getCategory, getlimitItems } from "./AdminsFunction";
import "../../css/Admins/landing.css";


class Home extends Component {
    state = {
        items:[],
        categories:[]
    };

    componentDidMount(){
        getlimitItems().then(res=>{
            this.setState({
                items:res.data.items
            })
        })

        getCategory().then(res=>{
            this.setState({
                categories:res.data
            })
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">recent items</h2>

                <div>
                    <Link to={"/items/addform"} className="btn btn-info info ">
                        <FontAwesomeIcon icon="plus" />
                        <span className="add">add items</span>
                    </Link>
                </div>
                <div className="row">
                    {this.state.items.map(item => {
                        return (
                            <div
                                className=" col-6 col-md-6 col-lg-4 "
                                key={item.id}
                            >
                                <div
                                    className="card"
                                    style={{ width: "14rem" }}
                                >
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
                                            <span className="list_span">
                                                status
                                            </span>{" "}
                                            :{" "}
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
                                            <span className="list_span2">
                                                date
                                            </span>
                                            :{" "}
                                            <span className="list">
                                                {item.date}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <Link
                                                to={"/item/details/" + item.id}
                                                className="btn btn-success btn_buy"
                                            >
                                                buy <span> ${item.price} </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                    <hr/>

                    <h2 className='text-center'>Categories</h2>
                <table class="table table-striped">
                <thead>
                    <tr className='bg-primary'>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">description</th>
                        <th scope="col">photo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.categories.map(category => {
                        return (
                            <tr key={category.id}>
                                <th scope="row">{category.id}</th>
                                <td><Link to={'/category/items/'+category.id} className='category_link'>{category.name}</Link></td>
                                <td>{category.description}</td>
                                <td><img src={
                                            "/images/Admins/category/"+category.photo 
                                        } alt="..." class="rounded-0"/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
                
            </div>
        );

        
    }

    
}

export default Home;
