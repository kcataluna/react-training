import React from 'react';

const Output = ({credentials}) => (
    <div className="card mb-3">
        <h5 className="card-header">Output</h5>
        <div className="card-body">
            <form action="javascript:void(0)">
                <fieldset disabled>
                    <img src="https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" className="img-fluid form-group" alt="" />
                    <div className="form-group">
                        <label htmlFor="inputID">ID Number</label>
                        <input type="text" className="form-control" id="inputID" placeholder="" defaultValue={credentials.id} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="" defaultValue={credentials.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputBirthdate">Birthdate</label>
                        <input type="text" className="form-control" id="inputBirthdate" placeholder="" defaultValue={credentials.birthdate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="" defaultValue={credentials.address} />
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
);

export default Output;