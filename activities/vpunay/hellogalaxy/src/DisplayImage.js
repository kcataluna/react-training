import React from 'react';
import logo from './logo.svg';
import './App.css';

class Panel extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.url}/><br />
                {this.props.quote}
            </div>
        );
    }
}

export default Panel;
