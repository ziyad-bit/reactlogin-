import React, { Component } from "react";
import { getItems, handlePage } from "./AdminsFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/Admins/items.css";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";


class Items extends Component {
    state = {
        items: [],
        id:'',
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    };

    componentDidMount() {
        getItems().then(res => {
            this.setState({
                items: res.data.items.data,
                
                activePage: res.data.items.current_page,
                totalItemsCount: res.data.items.total,
                itemsCountPerPage: res.data.items.per_page
            });
        });
    }

    handlePageChange = pageNumber => {
        console.log(`active page is ${pageNumber}`);
        handlePage(pageNumber).then(res => {
            this.setState({
                items: res.data.items.data,
                activePage: res.data.items.current_page,
                totalItemsCount: res.data.items.total,
                itemsCountPerPage: res.data.items.per_page
            });
        });
    };

    render() {
        
        
        
        return (
            <div>
                <h1 className="text-center">All items</h1>

                <div>
                    <Link to={"/items/addform"} className="btn btn-info info ">
                    <FontAwesomeIcon icon="plus" />
                        <span className='add'>add items</span>
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
                                            <span className='list_span'>status</span> :{" "}
                                            
                                                {" "}
                                                {item.status == 1 ? <span className="list">New </span>: null}
                                                {item.status == 2 ? <span className="list">used </span> : null}
                                                {item.status == 3 ? <span className="list">very old </span>: null}
                                            
                                        </li>
                                        
                                        <li className="list-group-item">
                                            <span className="list_span2">date</span>
                                            :{" "}
                                            <span className="list">
                                                {item.date}
                                            </span>
                                        </li>
                                        <li className="list-group-item">
                                            <Link to={'/item/details/' + item.id } className="btn btn-success btn_buy">
                                                buy ${item.price}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='d-flex justify-content-center'>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={3}
                        itemClass="page-item"
                        linkClass="page-link"
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Items;
