import React from 'react';

import Axios from 'axios';

import Article from './Article';

class NewsAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: []};
        Axios({
            method: 'GET',
            url: `https://newsapi.org/v2/everything?q=${props.q}&from=${props.from}&sortBy=${props.sortBy}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`
        }).then((response) => {
            const articles = response.data.articles.filter(article => article.urlToImage != null);
            this.setState({articles});
        });
    }

    render = () => {
        return (
            <div className="card-columns">
                {this.state.articles.map((article, index) =>
                    <Article key={index} {...article} />
                )}
            </div>
        );
    }
}

export default NewsAPI;