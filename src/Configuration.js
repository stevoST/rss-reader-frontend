import React, {Component} from 'react';
import axios from "axios/index";
import {Link} from 'react-router-dom'
import { Label, Input, FormGroup,  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {API_BASE_URL} from "./config";


class Configuration extends Component{
    state = {
        configurations: [],
        addFeedModal: false,
        editFeedModal: false,
        newFeedData: {
            feedName: '',
            feedLink: '',
            feedDateFormat: ''
        },

        editFeedData: {
            id: '',
            feedName: '',
            feedLink: '',
            feedDateFormat: ''
        }
    }

    componentWillMount() {
        axios.get(API_BASE_URL + 'configuration').then((response) => {
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
        axios.post(API_BASE_URL + 'configuration', this.state.newFeedData).then((response) => {
            const { configurations } = this.state;

            configurations.push(response.data);

            this.setState({ configurations, addFeedModal: false, newConfigurationsData: {
                    feedName: '',
                    feedLink: '',
                    feedDateFormat: ''
                }});
        });
    }

    editFeed(id, feedName, feedLink, feedDateFormat){
        this.setState({
            editFeedData: {id, feedName, feedLink, feedDateFormat},
            editFeedModal: !this.state.editFeedModal
        })

    }

    updateFeed() {
        axios.post(API_BASE_URL + '/configuration', this.state.editFeedData).then((response) => {
        });

        // let { feedName, feedLink } = this.state.editFeedData;
        //
        // axios.put(API_BASE_URL + 'configuration/' + this.state.editFeedData, {
        //     feedName, feedLink
        // }).then((response) => {
        //     this._refreshFeeds();
        // });
    }

    deleteFeed(id){
        axios.delete(API_BASE_URL + 'configuration/' + id).then((response) => {
            this._refreshFeeds();
        });
    }

    _refreshFeeds() {
        axios.get(API_BASE_URL + 'configuration').then((response) => {
            this.setState({
                configurations: response.data
            })
        });
    }

    render()
    {
        const configurations = this.state.configurations.map((configuration) => {
            return (


            <tr key={configuration.id} className="mt-5">
                <td>{configuration.id}</td>
                <td>{configuration.feedName}</td>
                <td>{configuration.feedLink}</td>
                <td>
                    <button type="button" className="btn btn-success mr-2 mb-1" onClick={this.editFeed.bind(this, configuration.id, configuration.feedName, configuration.feedLink, configuration.feedDateFormat)}>Edit</button>
                    <button type="button" className="btn btn-danger mb-1" onClick={this.deleteFeed.bind(this, configuration.id)}>Delete</button>
                    <Link to={`/configuration/${configuration.id}`}>
                        <button type="button" className="btn btn-danger">Edit Feed Page</button>
                    </Link>
                </td>
            </tr>



            )
        });

        return (
            <div className="container mt-5">

                <h1>Configuration</h1>

                <Button className="my-3" color="primary" onClick={this.toggleAddFeedModal.bind(this)}>Add Feed</Button>
                <Modal isOpen={this.state.addFeedModal} toggle={this.toggleAddFeedModal.bind(this)}>
                    <ModalHeader toggle={this.toggleAddFeedModal.bind(this)}>Add New Feed</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="feedName">Feed Name</Label>
                            <Input id="feedName" value={this.state.newFeedData.feedName} onChange={(e) => {
                                const { newFeedData } = this.state;

                                newFeedData.feedName = e.target.value;

                                this.setState({newFeedData});
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="feedLink">Feed Link</Label>
                            <Input id="feedLink" value={this.state.newFeedData.feedLink} onChange={(e) => {
                                const { newFeedData } = this.state;

                                newFeedData.feedLink = e.target.value;

                                this.setState({ newFeedData });
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="feedDateFormat">Feed Item</Label>
                            <Input id="feedDateFormat" value={this.state.newFeedData.feedDateFormat} onChange={(e) => {
                                const { newFeedData } = this.state;

                                newFeedData.feedDateFormat = e.target.value;

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
                                const { editFeedData } = this.state;

                                editFeedData.feedName = e.target.value;

                                this.setState({editFeedData});
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="feedLink">Feed Link</Label>
                            <Input id="feedLink" value={this.state.editFeedData.feedLink} onChange={(e) => {
                                const { editFeedData } = this.state;

                                editFeedData.feedLink = e.target.value;

                                this.setState({ editFeedData });
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="feedDateFormat">Feed Item</Label>
                            <Input id="feedDateFormat" value={this.state.editFeedData.feedDateFormat} onChange={(e) => {
                                const { editFeedData } = this.state;

                                editFeedData.feedDateFormat = e.target.value;

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