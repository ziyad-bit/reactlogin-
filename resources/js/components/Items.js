import React, { Component } from "react";
import { getItems } from "./AdminsFunction";
import "../../css/Admins/items.css";
import { Link} from "react-router-dom";

class Items extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        getItems().then(res => {
            this.setState({
                items: res.data
            });
        });
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>All items</h1>
                <div><Link to="/items/addform" className='btn btn-info info '>add items</Link></div>
                <div className="row">
                    {this.state.items.map(item => {
                        return (
                            <div className=" col-6 col-md-6 col-lg-4 ">
                                <div
                                    className="card"
                                    style={{ width: "14rem" }}
                                >
                                    <img
                                        src={require("./download.jpg")}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h3 className="card-title">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        
                                        <li className="list-group-item">
                                            <span>status</span> : <span className='list'> {item.status}</span>    
                                        </li>
                                        <li className="list-group-item">
                                            <span className='price'>price</span>: <span className='list'>$ {item.price}</span>
                                        </li>
                                    </ul>
                                    <div className="card-body">
                                        <div className="btn btn-success">
                                            buy
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Items;
