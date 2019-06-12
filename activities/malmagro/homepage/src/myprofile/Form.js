import React from 'react';
import "./App.css"
import {connect} from 'react-redux'
import {formChanged} from './actions/profileactions'

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
                        <input type="file" id="picture" onChange={this.props.onPictureChange}/>
                    </div>
                    <div>
                        <img src={this.props.picture} width="100px" height="100px"/>
                    </div>
                </div>
        );
    }

    onFormChange = (e) => {
        if(this.props.readOnly){
            e.preventDefault()
        } else {
            this.props.onFormChange(e)
        }
    }
}

const mapStateToProps = (state) => {
    return{
        fname: state.profileState.fname,
        mname: state.profileState.mname,
        lname: state.profileState.lname,
        gender: state.profileState.gender,
        nationality: state.profileState.nationality,
        picture: state.profileState.picture
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFormChange: (e) => (dispatch(formChanged(e.target.id, e.target.value))),
        onPictureChange: (e) => (dispatch(formChanged(e.target.id, URL.createObjectURL(e.target.files[0]))))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Form);