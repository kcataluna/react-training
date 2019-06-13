import React from 'react'
import './App.css'
import SmartButton from './SmartButton'
import DumbHeader from './DumbHeader'
import DumbInput from './DumbInput'

class SmartComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            buttonName: this.props.buttonText
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

    onTextChange = (e) =>{
        const text = e.target.value == ""?this.props.buttonText:e.target.value
        this.setState({"buttonName":text})
    }
}

export default SmartComponent