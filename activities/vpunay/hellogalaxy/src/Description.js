import React from 'react';
import logo from './logo.svg';
import './App.css';

class Panel extends React.Component {
    render() {
        return (
            <div>
                {this.props.description}
            </div>
        );
    }
}

export default Panel;
