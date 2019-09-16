import React, {Component} from 'react';
import axios from "axios/index";
import {API_BASE_URL} from "./config";
import {Link} from 'react-router-dom'
import Moment from 'react-moment';
import {Button} from 'reactstrap';
import {Tabs, Tab, TabPanel, TabList} from 'react-web-tabs';
import "react-web-tabs/dist/react-web-tabs.css";


class ConfigurationDetail extends Component {

    state = {
        articles: [],
        editFeedData: {
            id: '',
            feedName: '',
            feedLink: '',
            feedDateFormat: ''
        }
    }


    handleFeedNameChange = (event) => {
        const {editFeedData} = this.state;
        editFeedData.feedName = event.target.value;
        this.setState({editFeedData});
    }

    handleFeedLinkChange = (event) => {
        const {editFeedData} = this.state;
        editFeedData.feedLink = event.target.value;
        this.setState({editFeedData});
    }

    handleFeedDateFormat = (event) => {
        const {editFeedData} = this.state;
        editFeedData.feedDateFormat = event.target.value;
        this.setState({editFeedData});
    }

    updateFeed() {
        axios.post(API_BASE_URL + 'configuration', this.state.editFeedData).then((response) => {
        });
    }

    componentDidMount() {
        axios.get(API_BASE_URL + 'configuration/' + this.props.match.params.id).then((response) => {

            this.setState({
                editFeedData: response.data
            })

            axios.get(API_BASE_URL + 'configuration/' + this.props.match.params.id + '/' + this.state.editFeedData.feedName).then((response) => {
                this.setState({
                    articles: response.data
                })
            });
        });

    }

    render() {
        const {id, feedName, feedLink, feedDateFormat} = this.state.editFeedData;
        const articles = this.state.articles.map((article) => {

            return (
                <div className="jumbotron mt-5" key={article.id}>
                    <a href={article.link}><h4>{article.title}</h4></a>
                    {article.description}
                    <br />
                    <b><Moment>{article.pubDateFormatted}</Moment></b>
                </div>

            )
        });
        return (
            <div className="container mt-5">

                <h1>Detail Page</h1>
                <Tabs defaultTab="one">
                    <TabList>
                        <Tab tabFor="one">Configuration</Tab>
                        <Tab tabFor="two">View Articles</Tab>
                    </TabList>
                    <TabPanel tabId="one">
                        {id} <br/>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Feed Name</span>
                            </div>
                            <input type="text" value={feedName} className="form-control"
                                   aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default" onChange={this.handleFeedNameChange}/>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Feed Link</span>
                            </div>
                            <input type="text" value={feedLink} className="form-control"
                                   aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default" onChange={this.handleFeedLinkChange}/>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Date Format</span>
                            </div>
                            <input type="text" value={feedDateFormat} className="form-control"
                                   aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default" onChange={this.handleFeedDateFormat}/>
                        </div>
                        <Button color="primary" className="mr-1" onClick={this.updateFeed.bind(this)}>Update Feed</Button>
                        <Link to={`/configuration`}>
                            <Button color="primary">Cancel</Button>
                        </Link>
                    </TabPanel>
                    <TabPanel tabId="two">
                            <div className="col"></div>
                            <div className="col-8">{articles}</div>
                            <div className="col"></div>
                    </TabPanel>
                </Tabs>

            </div>
        )
    }
}

export default ConfigurationDetail;