import React from 'react';
import {connect} from 'react-redux';
import {setCredentials} from '../actions';

const input = {
    id: 'inputID',
    name: 'inputName',
    birthdate: 'inputBirthdate',
    address: 'inputAddress',
    picture: 'filePicture'
};

const Input = ({ dispatch }) => {
    let id, name, birthdate, address, picture;
    const handleChange = event => {
        if(event.target.id == input.picture) {
            let reader = new FileReader(), file = event.target.files[0];
            try {
                reader.onloadend = () => {
                    picture = reader.result;
                    dispatch(setCredentials({id, name, birthdate, address, picture}));
                }
                reader.readAsDataURL(file);
            } catch (error) {
                picture = null;
                dispatch(setCredentials({id, name, birthdate, address, picture}));
            }
            return;
        } else {
            switch(event.target.id) {
                case input.id: 
                    id = event.target.value; 
                    break;
                case input.name: 
                    name = event.target.value; 
                    break;
                case input.birthdate: 
                    birthdate = event.target.value; 
                    break;
                case input.address: 
                    address = event.target.value;
                    break;   
                default: break;
            }
            dispatch(setCredentials({id, name, birthdate, address, picture}));
        }
    }
    return (
        <div className="card mb-3">
            <h5 className="card-header">Input</h5>
            <div className="card-body">
                <form action='javascript:void(0)'>
                    <div className="form-group">
                        <label htmlFor="inputID">ID Number</label>
                        <input type="text" className="form-control" id={input.id} placeholder="" onChange={handleChange} />
                    </div>
                     <div className="form-group">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id={input.name} placeholder="" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputBirthdate">Birthdate</label>
                        <input type="text" className="form-control" id={input.birthdate} placeholder="" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id={input.address} placeholder="" onChange={handleChange} />
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id={input.picture} onChange={handleChange} />
                        <label className="custom-file-label" htmlFor="filePicture">Choose file</label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default connect()(Input);