import {connect} from 'react-redux';
import Output from '../components/Forms/Output';

const mapStateToProps = state => {
    return {
        credentials: state.credentials
    };
}

export default connect(
    mapStateToProps
)(Output);