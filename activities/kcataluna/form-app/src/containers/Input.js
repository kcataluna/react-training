import React from 'react';
import { connect } from 'react-redux';
import { setCredentials } from '../actions';

const Input = ({ dispatch }) => {
    let id, name, birthdate, address;
    return (
        <div className="card mb-3">
            <h5 className="card-header">Input</h5>
            <div className="card-body">
                <form onSubmit={
                    e => {
                        e.preventDefault();

                        dispatch(setCredentials({
                            id: id.value,
                            name: name.value,
                            birthdate: birthdate.value,
                            address: address.value
                        }));

                        id.value = '';
                        name.value = '';
                        birthdate.value = '';
                        address.value = '';
                    }
                }>
                    <div className="form-group">
                        <label htmlFor="inputID">ID Number</label>
                        <input type="text" className="form-control" id="inputID" placeholder="" ref={input => id = input} />
                    </div>
                     <div className="form-group">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="" ref={input => name = input} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputBirthdate">Birthdate</label>
                        <input type="text" className="form-control" id="inputBirthdate" placeholder="" ref={input => birthdate = input} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="" ref={input => address = input} />
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="filePicture" />
                        <label className="custom-file-label" htmlFor="filePicture">Choose file</label>
                    </div>
                    <button className="btn btn-primary btn-block mt-3 float-right" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default connect()(Input);