import React, { Component } from "react";
import { register } from "./AdminsFunction";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: " ",

            //errorsmsg

            nameRequired: "",
            nameValid:'',
            emailRequired: "",
            emailUnique: "",
            passwordRequired: "",

            success: ""
        };
    }

    change = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    validateName = () => {
        let nameRequired = "";
        
        if (this.state.name.length > 25) {
            nameRequired = "u can't enter more than 25 characters";
        }
        if (nameRequired) {
            this.setState({
                nameRequired
            });
            return false;
        } else {
            this.setState({
                nameRequired: ""
            });
            
        }
        
        

        if (this.state.name.length < 5) {
            nameRequired = "u should enter at least 5 characters";
        }
        if (nameRequired) {
            this.setState({
                nameRequired
            });
            return false;
        } else {
            this.setState({
                nameRequired: ""
            });
            return true
        }
    };

    validatePassword() {
        let passwordRequired = "";
        if (this.state.password.length < 8) {
            passwordRequired = "u should enter at least 8 characters";
        }
        if (passwordRequired) {
            this.setState({
                passwordRequired
            });
            return false;
        } else {
            this.setState({
                passwordRequired: ""
            });
            return true
        }
    }

    validateEmail = () => {
        let emailRequired = "";
        if (this.state.email.length < 15) {
            emailRequired = "u should enter at least 15 characters";
        }
        if (emailRequired) {
            this.setState({
                emailRequired
            });
            return false;
        } else {
            this.setState({
                emailRequired: ""
            });
            return true
        }
    };

    submit = e => {
        e.preventDefault();
        const validateName=this.validateName();
        const validateEmail=this.validateEmail();
        const validatePassword=this.validatePassword();

        const newadmins = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        register(newadmins).then(res => {
            if (res) {
                this.props.history.push(`/login`);
            }

            if (!res && validateEmail==true && validateName==true && validatePassword==true) {
                this.setState({
                    emailUnique: "this email is used"
                });
            }
        });
    };

    render() {
        const success = (
            <div className="alert alert-success text-center">
                {this.state.success}
            </div>
        );
        return (
            <div className="container">
                {this.state.success ? success : null}
                <div
                    className="card text-white bg-info mb-3"
                    style={{ maxWidth: "350px" }}
                >
                    <div className="card-header">
                        <h3>sign up</h3>
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
                                    onChange={this.change}
                                />
                                <small style={{ color: "red" }}>
                                    {this.state.nameRequired}
                                </small>
                                <small style={{ color: "red" }}>
                                    {this.state.nameValid}
                                </small>
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
                                <small style={{ color: "red" }}>
                                    {this.state.emailRequired}
                                </small>
                                <small style={{ color: "red" }}>
                                    {this.state.emailUnique}
                                </small>
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
                                <small style={{ color: "red" }}>
                                    {this.state.passwordRequired}
                                </small>
                            </div>

                            <button type="submit" className="btn btn-success">
                                sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
