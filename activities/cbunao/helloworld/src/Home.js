import React from 'react';
import logo from './logo.svg';
class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <a className="home" href="/">
                <img src={logo} alt height="20"/><span className="homeName">{this.props.siteName}</span>
            </a>
        );
    }
}

export default Home;