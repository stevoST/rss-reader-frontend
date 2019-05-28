import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        articles: []
    }
    // const fetchData = async () => {
    //     const resp = await fetch('http://localhost:8080/');
    //     const data = await resp.json();
    //     console.log(data);
    // };

    // fetchData();

    componentWillMount()
    {
        axios.get('http://localhost:8080/').then((response) => {
            this.setState({
                articles: response.data
            })
        });
    }
    render()
    {
        let articles  = this.state.articles.map((article) => {
            return (
                <div>{article.title}</div>
            )
        });

        return (
            <div className="App">
                {articles}
            </div>
        )
    }
}


export default App;

