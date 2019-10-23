import React, {Component} from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import {API_BASE_URL} from "./config";
import {Button} from "reactstrap";

class Feeds extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        axios.get(API_BASE_URL + 'articles').then((response) => {
            this.setState({
                articles: response.data
            })
        });
    }

    fetchNewFeeds() {
        axios.get(API_BASE_URL + 'articles/fetcharticles').then((response) => {
        });
    }

    articles = () => this.state.articles.map((article) => (
            <div className="jumbotron mt-5" key={article.id}>
                <a href={article.link}><h4>{article.title}</h4></a>
                {article.description}
                <br />
                <b><Moment>{article.pubDateFormatted}</Moment></b>
            </div>
        ))

    render() {
        return (
            <div className="App">

                <div className="container mt-5">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8">{this.articles()}</div>
                        <div className="col">
                            <Button className="mt-5" color="primary" onClick={this.fetchNewFeeds.bind(this)}>Fetch new feeds</Button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default Feeds;

