import React from 'react';
import './App.css';

class SmartButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            buttonClickState: "0"
        }
    }

    render(){
        const color = this.state.buttonClickState=="0"?"red":"blue"
        return (
            <div>
                <button style={{backgroundColor:color}} onClick={this.buttonClicked}>{this.props.buttonName}</button>
                <div>
                    I change color if you click me..
                </div>
            </div>
        )
    }

    buttonClicked = () =>{
        this.setState({buttonClickState:this.state.buttonClickState=="0"?"1":"0"})
    }
}

export default SmartButton;