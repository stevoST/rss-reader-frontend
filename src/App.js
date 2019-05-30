import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        articles: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/').then((response) => {
            this.setState({
                articles: response.data
            })
        });
        console.log(this.state.articles);
    }

    render() {
        let articles = this.state.articles.map((article) => {
            return (
                <div class="jumbotron">
                    <a href={article.link}><h4>{article.title}</h4></a>
                    {article.description}
                </div>

            )
        });

        return (
            <div className="App">

                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">RSS Reader</a>
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-item" href="#">Show All RSS</a></li>
                    </ul>
                </nav>


                <div class="container">
                    <div class="row">
                        <div class="col"></div>
                        <div class="col-8">
                            {articles}
                        </div>
                        <div class="col"></div>
                    </div>

                </div>
            </div>
        )
    }
}


export default App;

