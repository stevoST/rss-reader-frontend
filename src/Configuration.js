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

    }

    render()
    {
        let configurations = this.state.configurations.map((configuration) => {
            return (
                <div className="jumbotron">
                    {configuration.feedName}<br/>
                    {configuration.feedLink}
                </div>

            )
        });

        return (
            <div className="container">

                <h1>Configuration</h1>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Feed Name</th>
                                <th>Feed Link</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>meno</td>
                                <td>linka</td>
                                <td>
                                    <button type="button" className="btn btn-success">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        {configurations}</div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
}

export default Configuration;