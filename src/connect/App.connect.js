import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSignedIn} from "../actions/index";
import App from '../App';

const mapStateToProps = (state) => ({ signIn: state.signIn });

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators({setSignedIn}, dispatch) }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);