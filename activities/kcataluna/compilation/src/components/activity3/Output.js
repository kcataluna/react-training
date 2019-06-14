import React from 'react';
import {connect} from 'react-redux';

class Output extends React.Component {
    render = () => {
        let imageClass = this.props.picture ? 'img-fluid form-group' : 'd-none';
        return (
            <div className="card mb-3">
                <h5 className="card-header">Output</h5>
                <div className="card-body">
                    <form action="javascript:void(0)">
                        <fieldset disabled>
                            <img src={this.props.picture} className={imageClass} alt="" />
                            <div className="form-group">
                                <label htmlFor="inputID">ID Number</label>
                                <input type="text" className="form-control" placeholder="" defaultValue={this.props.id} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" className="form-control" placeholder="" defaultValue={this.props.name} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputBirthdate">Birthdate</label>
                                <input type="text" className="form-control" placeholder="" defaultValue={this.props.birthdate} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" placeholder="" defaultValue={this.props.address} />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state.credentials;

export default connect(mapStateToProps)(Output);