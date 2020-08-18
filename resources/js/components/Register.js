import React, { Component } from "react";
import { register } from "./AdminsFunction";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",

            //errorsmsg

            nameRequired: "",
            emailRequired: "",
            passwordRequired:'',
            
            isValid:'',
            success:''
        };

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
        this.validate=this.validate.bind(this);
    }

    

    change(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    validate(){
        let nameRequired='';
        let emailRequired='';
        let passwordRequired='';
        

        if(this.state.name.length < 5){
            nameRequired='u should enter at least 5 characters'
        }
        if (nameRequired) {
            this.setState({
                nameRequired,
                isValid: false
            })
            
        }else{
            this.setState({
                nameRequired:''
            })
        }

        if(this.state.email.length < 15){
            emailRequired='u should enter at least 15 characters'
        }
        if (emailRequired) {
            this.setState({
                emailRequired,
                isValid: false
            })
            
        }else{
            this.setState({
                emailRequired:''
                
            })
        }

        if(this.state.password.length < 8){
            passwordRequired='u should enter at least 8 characters'
        }
        if (passwordRequired) {
            this.setState({
                passwordRequired,
                isValid: false

            })
            
        }else{
            this.setState({
                passwordRequired:''
            })
        }

        this.setState({
            
            isValid: true

        })
    }

    submit(e) {
        e.preventDefault();
        this.validate();
        if ( this.state.isValid == true) {
            this.setState({
                success:'you signed up successfully'
            })
        }

        const newadmins = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        register(newadmins).then(res => {
            
            
        });
    }

    render() {
        const success= (<div className='alert alert-success'>{this.state.success }</div>)
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
                                <small style={{color:'red'}}>{this.state.nameRequired}</small>
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
                                <small style={{color:'red'}}>{this.state.emailRequired}</small>
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
                                <small style={{color:'red'}}>{this.state.passwordRequired}</small>
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
