import React, {Component} from 'react';
import axios from "axios/index";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Configuration extends Component{
    state = {
        configurations: [],
        AddFeedModal: false
    }

    componentWillMount() {
        axios.get('http://localhost:8080/configuration').then((response) => {
            this.setState({
                configurations: response.data
            })
        });

    }

    toggleAddFeedModal(){
        this.setState({
            AddFeedModal: true
        })
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

                <Button color="primary" onClick={this.toggleAddFeedModal.bind(this)}>Add Feed</Button>
                <Modal isOpen={this.state.AddFeedModal} toggle={this.toggleAddFeedModal.bind(this)}>
                    <ModalHeader toggle={this.toggleAddFeedModal.bind(this)}>Add New Feed</ModalHeader>
                    <ModalBody>
                        test text
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