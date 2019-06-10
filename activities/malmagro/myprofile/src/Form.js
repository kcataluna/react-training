import React from 'react';
import "./App.css"

class Form extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.header}</h1>
                </div>
                <div>
                    <input placeholder="Your first name" id="fname" onChange={this.onFormChange} value={this.props.fname}/>
                </div>
                <div>
                    <input placeholder="Your middle name" id="mname" onChange={this.onFormChange} value={this.props.mname}/>
                </div>
                <div>
                    <input placeholder="Your last name" id="lname" onChange={this.onFormChange} value={this.props.lname}/>
                </div>
                <div>
                    <select placeholder="Gender" id="gender" onChange={this.onFormChange} value={this.props.gender}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div>
                    <input placeholder="Your Nationality" id="nationality" onChange={this.onFormChange} value={this.props.nationality}/>
                </div>
                <div className={this.props.readOnly?"hidden":""}>
                    <input type="file" onChange={this.onPictureChange}/>
                </div>
                <div>
                    <img src={this.props.picture} width="100px" height="100px"/>
                </div>
            </div>
        );
    }

    onPictureChange = (e) => {
        this.props.onPictureChange(e)
    } 

    onFormChange = (e) => {
        if(this.props.readOnly){
            e.preventDefault()
        } else {
            this.props.onFormChange(e)
        }
    }
}

export default Form;
