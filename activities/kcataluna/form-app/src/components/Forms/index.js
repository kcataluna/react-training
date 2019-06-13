import React from 'react';

import Input from '../../containers/Input';
import Output from '../../containers/Output';

class Forms extends React.Component {
    render() {
        return (
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md">
                        <Input />
                    </div>
                    <div className="col-md">
                        <Output />
                    </div>
                </div>
            </div>
        );
    }    
}

export default Forms;