import React from 'react';

class Output extends React.Component {
    render() {
        return (
            <div className="card mb-3">
                <h5 className="card-header">Output</h5>
                <div className="card-body">
                    <form action="javascript:void(0)">
                        <img src="https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" className="img-fluid form-group" alt="" />
                        <div className="form-group">
                            <label htmlFor="inputID">ID Number</label>
                            <input type="text" className="form-control" id="inputID" placeholder="" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }    
}

export default Output;