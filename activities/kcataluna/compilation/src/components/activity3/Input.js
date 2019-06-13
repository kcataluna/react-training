import React from 'react';

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
    
    handleChange = (e) => {}

    render = () => {
        return (
            <div className="card mb-3">
                <h5 className="card-header">Input</h5>
                <div className="card-body">
                    <form action='javascript:void(0)'>
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

export default Input;