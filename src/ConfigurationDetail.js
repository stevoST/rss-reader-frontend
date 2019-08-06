import React, {Component} from 'react';
import axios from "axios/index";


class ConfigurationDetail extends Component {

    state = {
        configuration: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/configuration/' + this.props.match.params.id).then((response) => {
            this.setState({
                configuration: response.data
            })
        });

    }
    render() {
        return (
            <div>
                <h1>Detail Page</h1>
                {this.state.configuration.id} <br />
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Feed Name</span>
                    </div>
                    <input type="text" value={this.state.configuration.feedName} className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Feed Link</span>
                    </div>
                    <input type="text" value={this.state.configuration.feedLink} className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Date Format</span>
                    </div>
                    <input type="text" value={this.state.configuration.feedItem} className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" />
                </div>

            </div>
        )
    }
}

export default ConfigurationDetail;