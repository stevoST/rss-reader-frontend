import React, {Component} from 'react';
import axios from 'axios';

class Feeds extends Component {
    state = {
        articles: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/articles').then((response) => {
            this.setState({
                articles: response.data
            })
        });
        console.log(this.state.articles);
    }

    render() {
        let articles = this.state.articles.map((article) => {
            return (
                <div className="jumbotron">
                    <a href={article.link}><h4>{article.title}</h4></a>
                    {article.description}
                </div>

            )
        });

        return (
            <div className="App">

                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8">
                            {articles}
                        </div>
                        <div className="col"></div>
                    </div>

                </div>
            </div>
        )
    }
}


export default Feeds;

