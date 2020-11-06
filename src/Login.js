import React, {Component} from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";
import {API_BASE_URL} from "./config";


class Login extends Component {
    state = {
        username: '',
        password: '',
        kokotina: {}
    }


    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    login() {
        const kokotina = {};
        const test= {
            username: 'Fred',
            password: '23'
        };
        Event.preventDefault();
        axios.post(API_BASE_URL + 'auth/login',{
            username: 'Fred',
            password: '23'
        })
            .then(response => localStorage.setItem("user", JSON.stringify(response.data)));

            /*{
                this.setState({kokotina: response});
            })
            .catch(err => console.log("TUTO JE CHYBA: " + err));
        console.log("response: "  + this.state.kokotina);*/
    }

    render() {
        const {username, password} = this.state;

        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form
                        onSubmit={this.login} >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={this.handleUsernameChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={this.handlePasswordChange}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block">
                                <span>Login</span>
                            </button>
                        </div>

                        <CheckButton style={{display: "none"}}/>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;