import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveCurrentSourceCode, deleteSourceCode, insertSourceCode, updateSourceCode} from "../actions";
import {FormActionControls} from '../components';

const mapStateToProps = (state) => ({
    isSignedIn: state.signIn.get('isSignedIn'),
    currentSourceCode: state.sourceCode.get('currentSourceCode'),
    index: state.sourceCode.get('index'),
    savedSourceCodeList: state.sourceCode.get('savedSourceCodeList')
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveCurrentSourceCode,
        deleteSourceCode,
        insertSourceCode,
        updateSourceCode
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormActionControls);