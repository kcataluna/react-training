import React from 'react';
import './Main.css';
import Form from './Form.js'

class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      fname: "",
      mname: "",
      lname: "",
      gender: "",
      nationality: "",
      picture:""
    }
  }

  render(){
    return (
      <div className="row">
          <div className="block">
            <Form header="Profile" 
              onFormChange={this.onFormChange} 
              onPictureChange={this.onPictureChange} 
              readOnly={false}
              picture={this.state.picture}
              />
          </div>
          <div className="block">
            <Form header="Profile Viewer" 
              fname={this.state.fname}
              mname={this.state.mname}
              lname={this.state.lname}
              gender={this.state.gender}
              nationality={this.state.nationality}
              readOnly={true}
              picture={this.state.picture}
            />
          </div>
          
      </div>
    );
  }

  onFormChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value 
    })
  }

  onPictureChange = (e) => {
    this.setState({
      picture: URL.createObjectURL(e.target.files[0])
    }) 
  }
}

export default Main;