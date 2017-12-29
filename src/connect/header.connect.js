import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSignedIn} from "../actions";
import {Header} from '../components';

const mapStateToProps = (state) => ({ isSignedIn: state.signIn.get('isSignedIn') });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setSignedIn}, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);