import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveCurrentSourceCode, deleteSourceCode, updateSourceCode, clearCurrentSourceCode} from "../actions";
import {ManageSourceCode} from '../components';

const mapStateToProps = (state) => ({
    isSignedIn: state.signIn.get('isSignedIn'),
    currentIndex: state.sourceCode.get('index'),
    savedSourceCodeList: state.sourceCode.get('savedSourceCodeList')
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveCurrentSourceCode,
        clearCurrentSourceCode,
        deleteSourceCode,
        updateSourceCode
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageSourceCode);