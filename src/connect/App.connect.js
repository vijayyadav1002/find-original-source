import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSignedIn, clearCurrentSourceCode} from "../actions/index";
import App from '../App';

const mapStateToProps = (state) => ({
    isSignedIn: state.signIn.get('isSignedIn'),
    currentSourceCode: state.sourceCode.get('currentSourceCode')
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSignedIn,
        clearCurrentSourceCode
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);