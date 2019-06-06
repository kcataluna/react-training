import React from 'react';

class MenuItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <a className="menuItem" href="/">{this.props.label}</a>
        );
    }
}

export default MenuItem;