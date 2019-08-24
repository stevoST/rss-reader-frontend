import React, {Component} from 'react';
import axios from "axios/index";


class ConfigurationDetail extends Component {

    state = {
        configuration: []
    }

    handleChange(event){
        this.setState({feedName: event.target.value});
        console.log(this.state);
        console.log(event);
    }

    componentWillMount() {
        axios.get('http://localhost:8080/configuration/' + this.props.match.params.id).then((response) => {
            console.log(response.data);
            this.setState({
                configuration: response.data
            })
        });

    }
    render() {
            const { configuration } = this.state;
        return (
            <div className="container mt-5">

                <h1>Detail Page</h1>
                {configuration.id} <br />
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Feed Name</span>
                    </div>
                    <input type="text" value={configuration.feedName} className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"  onChange={this.handleChange.bind(this)}/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Feed Link</span>
                    </div>
                    <input type="text" value={configuration.feedLink} className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Date Format</span>
                    </div>
                    <input type="text" value={configuration.feedDateFormat} className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" />
                </div>

            </div>
        )
    }
}

export default ConfigurationDetail;