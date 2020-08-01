import React, { Component } from "react";

import { login } from './AdminsFunction'

export default class Login extends Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.changestate = this.changestate.bind(this);

        this.state = {
            email: "",
            password: "",
            ischecked: false
        };
    }

    changestate(e) {
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
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <label>email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.changestate}
                        value={this.state.email}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.changestate}
                    />
                </div>

                <input
                    type="submit"
                    value="login"
                    className="btn btn-primary"
                />
            </form>
        );
    }
}
