import React, {Component} from 'react';
import axios from "axios/index";
import {Link} from 'react-router-dom'
import { Label, Input, FormGroup,  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Configuration extends Component{
    state = {
        configurations: [],
        addFeedModal: false,
        editFeedModal: false,
        newFeedData: {
            feedName: '',
            feedLink: '',
            feedItem: ''
        },

        editFeedData: {
            id: '',
            feedName: '',
            feedLink: '',
            feedItem: ''
        }
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
            addFeedModal: ! this.state.addFeedModal
        })
    }

    toggleEditFeedModal(){
        this.setState({
            editFeedModal: ! this.state.editFeedModal
        })
    }

    addFeed(){
        axios.post('http://localhost:8080/configuration', this.state.newFeedData).then((response) => {
            let { configurations } = this.state;

            configurations.push(response.data);

            this.setState({ configurations, addFeedModal: false, newConfigurationsData: {
                    feedName: '',
                    feedLink: '',
                    feedItem: ''
                }});
        });
    }

    editFeed(id, feedName, feedLink, feedItem){
        this.setState({
            editFeedData: {id, feedName, feedLink, feedItem},
            editFeedModal: !this.state.editFeedModal
        })

    }

    updateFeed() {
        axios.post('http://localhost:8080/configuration', this.state.editFeedData).then((response) => {
            console.log(this.state.editFeedData);
            console.log(response.data);

        });

        // let { feedName, feedLink } = this.state.editFeedData;
        //
        // axios.put('http://localhost:8080/configuration/' + this.state.editFeedData, {
        //     feedName, feedLink
        // }).then((response) => {
        //     this._refreshFeeds();
        // });
    }

    deleteFeed(id){
        axios.delete('http://localhost:8080/configuration/' + id).then((response) => {
            this._refreshFeeds();
        });
    }

    _refreshFeeds() {
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
                    <button type="button" className="btn btn-success" onClick={this.editFeed.bind(this, configuration.id, configuration.feedName, configuration.feedLink, configuration.feedItem)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={this.deleteFeed.bind(this, configuration.id)}>Delete</button>
                    <Link to={`/configuration/${configuration.id}`}>
                        <button type="button" className="btn btn-danger">Edit Feed Page</button>
                    </Link>
                </td>
            </tr>



            )
        });

        return (
            <div className="container">

                <h1>Configuration</h1>

                <Button className="my-3" color="primary" onClick={this.toggleAddFeedModal.bind(this)}>Add Feed</Button>
                <Modal isOpen={this.state.addFeedModal} toggle={this.toggleAddFeedModal.bind(this)}>
                    <ModalHeader toggle={this.toggleAddFeedModal.bind(this)}>Add New Feed</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="feedName">Feed Name</Label>
                            <Input id="feedName" value={this.state.newFeedData.feedName} onChange={(e) => {
                                let { newFeedData } = this.state;

                                newFeedData.feedName = e.target.value;

                                this.setState({newFeedData});
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="feedLink">Feed Link</Label>
                            <Input id="feedLink" value={this.state.newFeedData.feedLink} onChange={(e) => {
                                let { newFeedData } = this.state;

                                newFeedData.feedLink = e.target.value;

                                this.setState({ newFeedData });
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="feedItem">Feed Item</Label>
                            <Input id="feedItem" value={this.state.newFeedData.feedItem} onChange={(e) => {
                                let { newFeedData } = this.state;

                                newFeedData.feedItem = e.target.value;

                                this.setState({ newFeedData });
                            }} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addFeed.bind(this)}>Add Feed</Button>{' '}
                        <Button color="secondary" onClick={this.toggleAddFeedModal.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.editFeedModal} toggle={this.toggleEditFeedModal.bind(this)}>
                    <ModalHeader toggle={this.toggleEditFeedModal.bind(this)}>Edit Feed</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="feedName">Feed Name</Label>
                            <Input id="feedName" value={this.state.editFeedData.feedName} onChange={(e) => {
                                let { editFeedData } = this.state;

                                editFeedData.feedName = e.target.value;

                                this.setState({editFeedData});
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="feedLink">Feed Link</Label>
                            <Input id="feedLink" value={this.state.editFeedData.feedLink} onChange={(e) => {
                                let { editFeedData } = this.state;

                                editFeedData.feedLink = e.target.value;

                                this.setState({ editFeedData });
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="feedItem">Feed Item</Label>
                            <Input id="feedItem" value={this.state.editFeedData.feedItem} onChange={(e) => {
                                let { editFeedData } = this.state;

                                editFeedData.feedItem = e.target.value;

                                this.setState({ editFeedData });
                            }} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateFeed.bind(this)}>Update Feed</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditFeedModal.bind(this)}>Cancel</Button>
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