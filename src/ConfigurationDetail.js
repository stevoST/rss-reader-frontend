import React, {Component} from 'react';
import axios from "axios/index";


class ConfigurationDetail extends Component {

    state = {
        id: null,
        feedName: '',
        feedLink: '',
        feedDateFormat: ''
    }

    handleFeedNameChange = (event) => {
        this.setState({feedName: event.target.value});
    }

    handleFeedLinkChange = (event) => {
        this.setState({feedLink: event.target.value});
    }

    handleFeedDateFormat = (event) => {
        this.setState({feedDateFormat: event.target.value});
    }

    componentDidMount() {
        axios.get('http://localhost:8080/configuration/' + this.props.match.params.id).then((response) => {
               const { id, feedName , feedLink, feedDateFormat } = response.data;
               this.setState({
                   id, feedName , feedLink, feedDateFormat
               })
        });

    }
    render() {
        const { id, feedName , feedLink, feedDateFormat } = this.state;
        return (
            <div className="container mt-5">

                <h1>Detail Page</h1>
                {id} <br />
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Feed Name</span>
                    </div>
                    <input type="text" value={feedName} className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" onChange={this.handleFeedNameChange} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Feed Link</span>
                    </div>
                    <input type="text" value={feedLink} className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" onChange={this.handleFeedLinkChange}/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Date Format</span>
                    </div>
                    <input type="text" value={feedDateFormat} className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" onChange={this.handleFeedDateFormat}/>
                </div>

            </div>
        )
    }
}

export default ConfigurationDetail;