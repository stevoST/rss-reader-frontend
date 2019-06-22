import React, {Component} from 'react';
import axios from "axios/index";


class Configuration extends Component{
    state = {
        configurations: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/configuration').then((response) => {
            this.setState({
                configurations: response.data
            })
        });
        console.log(this.state.configurations);
    }

    render()
    {
        let configurations = this.state.configurations.map((configuration) => {
            return (
                <div class="jumbotron">
                    {configuration.feedName}<br/>
                    {configuration.feedLink}
                </div>

            )
        });

        return (
            <div>
                <h1>Configuration</h1>
                {configurations}
            </div>
        )
    }
}

export default Configuration;