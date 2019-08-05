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
                {this.state.configuration.feedName} <br />
                {this.state.configuration.feedLink} <br />
                {this.state.configuration.feedItem} <br />
            </div>
        )
    }
}

export default ConfigurationDetail;