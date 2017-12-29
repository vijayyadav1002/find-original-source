import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSignedIn, setToken, setProfile} from "../actions";
import {Header} from '../components';

const mapStateToProps = (state) => ({
    isSignedIn: state.signIn.get('isSignedIn'),
    profile: state.profile,
    token: state.token
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSignedIn,
        setToken,
        setProfile
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);