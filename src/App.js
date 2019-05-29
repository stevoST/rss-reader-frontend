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
                    <h4>{article.title}</h4>
                    {article.description}
                </div>

            )
        });

        return (
            <div className="App">
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

