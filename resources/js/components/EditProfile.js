import React, { Component } from 'react';

import { getAdmin } from "./AdminsFunction";
import { updateProfile } from "./AdminsFunction";


class EditProfile extends Component {
    state = {
        name:'',
        email:'',
        password:''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        getAdmin(id).then(res=>{
            this.setState({
                name:res.name,
                email:res.email,
                password:res.password
            })
        })
    }
    
    change = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submit=(e)=>{
        
        e.preventDefault();

        const id = this.props.match.params.id;
        const newAdmins = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        updateProfile(id,newAdmins).then(res=>{
            console.log(res)
        })

    }
    

    


    render() {
        return (
            <div className="container">
                <div
                    className="card text-white bg-info mb-3"
                    style={{ maxWidth: "350px" }}
                >
                    <div className="card-header">
                        <h3> Edit profile</h3>
                    </div>
                    <div className="card-body">
                        <form
                            onSubmit={this.submit}
                            
                        >
                            <div className="form-group">
                                <label>name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    aria-describedby="emailHelp"
                                    onChange={this.change}
                                />
                                
                            </div>
                            <div className="form-group">
                                <label>email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.change}
                                />
                                
                            </div>

                            <div className="form-group">
                                <label>password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={this.state.password || ''} 
                                    name="password"
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

export default EditProfile;
