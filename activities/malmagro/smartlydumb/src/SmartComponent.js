import React from 'react'
import './App.css'
import SmartButton from './SmartButton'
import DumbHeader from './DumbHeader'
import DumbInput from './DumbInput'

class SmartComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            buttonName: "Click Me"
        }
    }

    render(){
        return(
            <div>
                <DumbHeader title = {this.props.title}/>
                <DumbInput onTextChange = {this.onTextChange}/>
                <SmartButton buttonName = {this.state.buttonName}/>
            </div>
        )
    }

    buttonClicked = () =>{
        this.setState({buttonClickState:this.state.buttonClickState=="0"?"1":"0"})
    }

    onTextChange = (e) =>{
        this.setState({"buttonName":e.target.value})
    }
}

export default SmartComponent