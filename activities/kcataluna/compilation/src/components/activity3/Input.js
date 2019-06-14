import React from 'react';
import {connect} from 'react-redux';
import {setID, setName, setBirthdate, setAddress, setPicture} from '../../actions';

class Input extends React.Component {
    constructor() {
        super();
        this.input = {
            id: 'inputID',
            name: 'inputName',
            birthdate: 'inputBirthdate',
            address: 'inputAddress',
            picture: 'filePicture'
        };
    }
    
    handleChange = (e) => {
        if(e.target.id === this.input.picture) {
            let reader = new FileReader(), file = e.target.files[0];
            try {
                reader.onloadend = () => {
                    this.props.setPicture(reader.result);
                }
                reader.readAsDataURL(file);
            } catch (error) {
                this.props.setPicture(null);
            }
            return;
        } else {
            switch(e.target.id) {
                case this.input.id: 
                    this.props.setID(e.target.value);
                    break;
                case this.input.name: 
                    this.props.setName(e.target.value);
                    break;
                case this.input.birthdate: 
                    this.props.setBirthdate(e.target.value);
                    break;
                case this.input.address: 
                    this.props.setAddress(e.target.value);
                    break;   
                default: break;
            }
        }
    }

    render = () => {
        return (
            <div className="card mb-3">
                <h5 className="card-header">Input</h5>
                <div className="card-body">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="inputID">ID Number</label>
                            <input type="text" className="form-control" id={this.input.id} placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" id={this.input.name} placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputBirthdate">Birthdate</label>
                            <input type="text" className="form-control" id={this.input.birthdate} placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id={this.input.address} placeholder="" onChange={this.handleChange} />
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id={this.input.picture} onChange={this.handleChange} />
                            <label className="custom-file-label" htmlFor="filePicture">Choose file</label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, {setID, setName, setBirthdate, setAddress, setPicture})(Input);