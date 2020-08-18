import React, { Component } from "react";

import { login } from './AdminsFunction'

export default class Login extends Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);

        this.state = {
            email: "",
            password: "",
            
        };
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit(e) {
        e.preventDefault();
        
        const admins={
            email:this.state.email,
            password:this.state.password
        }
        
        login(admins).then(res => {
            if (res) {
                this.props.history.push(`/profile`)
            }
        })
    

    }

    render() {
        return (
            <div className="container">
                <div
                    class="card text-white bg-info mb-3"
                    style={{maxWidth : "350px"}}
                >
                    <div class="card-header"><h3>sign up</h3></div>
                    <div class="card-body">
                    <form onSubmit={this.submit}>
                    
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
                            value={this.state.password}
                            name="password"
                            onChange={this.change}
                        />
                    </div>
                    

                    <button type="submit" className="btn btn-success">
                        login 
                    </button>
                </form>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}
