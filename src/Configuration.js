import React, {Component} from 'react';
import axios from "axios/index";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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


            <tr key={configuration.id}>
                <td>{configuration.id}</td>
                <td>{configuration.feedName}</td>
                <td>{configuration.feedLink}</td>
                <td>
                    <button type="button" className="btn btn-success">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>



            )
        });

        return (
            <div className="container">

                <h1>Configuration</h1>

                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <div className="row">
                    <div className="col"></div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Feed Name</th>
                                <th>Feed Link</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {configurations}
                            </tbody>
                        </table>
                        </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
}

export default Configuration;