import React, {Component} from 'react';
import {API_BASE_URL} from "./config";
import axios from "axios/index";

class Settings extends Component {
    state = {
        settings: []
    }

    componentDidMount() {
        axios.get(API_BASE_URL + 'settings').then((response) => {

            this.setState({
                settings: response.data
            })
            console.log(this.state.settings);
        });

    }

    settings = () => this.state.settings.map((settingsRow) => {
        let property = settingsRow.property;
        if (property === "tracked_words") {
            property = "Tracked Words";
        }

        return (
            <div className="input-group mb-3" key={settingsRow.id}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">{property}</span>
                </div>
                <input type="text" value={settingsRow.value} className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"/>
            </div>

        )
    });

    render() {

        return (

            <div className="container">
                <h1>Settings</h1>
                {this.settings()}
            </div>
        )

    }
}

export default Settings;