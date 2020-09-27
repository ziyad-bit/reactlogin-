import React, { Component } from "react";
import { getCategory } from "./AdminsFunction";
import "../../css/Admins/category.css";
import { Link } from "react-router-dom";


class Category extends Component {
    state = {
        categories: []
    };

    componentDidMount() {
        getCategory().then(res => {
            this.setState({
                categories: res.data
            });
        });
    }
    render() {
        return (
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
        );
    }
}

export default Category;
