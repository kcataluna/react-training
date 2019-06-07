import React from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Description';
import GifPlayer from 'react-gif-player';

class Panel extends React.Component {
    render() {
        return (
            <div>
                <h5>
                    {this.props.word}
                </h5>
                <Description description={this.props.description} /><br />
                <GifPlayer gif={this.props.gifUrl} autoplay={true} />
            </div>
        );
    }
}

export default Panel;
