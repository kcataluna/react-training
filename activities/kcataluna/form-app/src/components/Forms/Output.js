import React from 'react';

const Output = ({credentials}) => {
    let imageClass = credentials.picture ? 'img-fluid form-group' : 'd-none';
    return (
        <div className="card mb-3">
            <h5 className="card-header">Output</h5>
            <div className="card-body">
                <form action="javascript:void(0)">
                    <fieldset disabled>
                        <img src={credentials.picture} className={imageClass} alt="" />
                        <div className="form-group">
                            <label htmlFor="inputID">ID Number</label>
                            <input type="text" className="form-control" placeholder="" defaultValue={credentials.id} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" placeholder="" defaultValue={credentials.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputBirthdate">Birthdate</label>
                            <input type="text" className="form-control" placeholder="" defaultValue={credentials.birthdate} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" placeholder="" defaultValue={credentials.address} />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Output;