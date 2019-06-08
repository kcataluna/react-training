import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <div className="card mb-3">
                <h5 className="card-header">Input</h5>
                <div className="card-body">
                    <form action="javascript:void(0)">
                        <div className="form-group">
                            <label htmlFor="inputID">ID Number</label>
                            <input type="text" className="form-control" id="inputID" placeholder="" />
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="filePicture" />
                            <label className="custom-file-label" htmlFor="filePicture">Choose file</label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }    
}

export default Input;