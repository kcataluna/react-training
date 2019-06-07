import React from 'react';
import Moment from 'moment';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.article = props.article;
        this.defaultImage = 'https://newsapi.org/images/n-logo-border.png';
    }

    onError = (event) => {
        event.target.style.display = "none";
    }

    render() {
        const publishedAt = Moment.parseZone(this.article.publishedAt).format('MMM D, YYYY [·] h:mm A'),
              urlToImage  = this.article.urlToImage ? this.article.urlToImage : this.defaultImage;
        return (
            <a href={this.article.url} className="text-body">
                <div className="card">
                    <img src={urlToImage} className="card-img-top" alt="..." onError={this.onError} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.article.title} <span className="badge badge-primary">{this.article.source.name}</span>
                        </h5>
                        <p className="card-text">{this.article.description}</p>
                        <p className="card-text"><small className="text-muted">{publishedAt}</small></p>
                    </div>
                </div>
            </a>
        );
    }
}

export default Article;