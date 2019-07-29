import React, {Component} from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';

class Feeds extends Component {
    state = {
        articles: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/articles').then((response) => {
            this.setState({
                articles: response.data
            })
                console.log(response.data);
        });
    }

    render() {
        let articles = this.state.articles.map((article) => {

            return (
                <div className="jumbotron" key={article.id}>
                    <a href={article.link}><h4>{article.title}</h4></a>
                    {article.description}
                    <br />
                    <b><Moment>{article.test}</Moment></b>
                </div>

            )
        });

        return (
            <div className="App">

                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8">{articles}</div>
                        <div className="col"></div>
                    </div>

                </div>
            </div>
        )
    }
}


export default Feeds;

