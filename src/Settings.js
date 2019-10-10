import React, {Component} from 'react';
import {API_BASE_URL} from "./config";
import axios from "axios/index";

class Settings extends Component {
    state = {
        settings: {
            id: '',
            property: '',
            value: ''
        }
    }

    componentDidMount() {
        axios.get(API_BASE_URL + 'settings').then((response) => {

            this.setState({
                settings: response.data
            })
            console.log(this.state.settings);
        });

    }
    render() {
        const {id, property, value} = this.state.settings;
        return (

            <div className="container mt-5">
                <h1>Settings</h1>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Property</span>
                    </div>
                    <input type="text" value={property} className="form-control"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>
        )

    }
}

export default Settings;