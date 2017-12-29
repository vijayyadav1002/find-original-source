import React from 'react';
import {func} from 'prop-types';
import GoogleLogin from 'react-google-login';
import './login.css';

const onSuccess = (response, props) => {
    console.log(response);
    props.setSignedIn(true);
    props.setProfile(response.profileObj);
    props.setToken(response.tokenObj);
};

const onFailure = (response, setSignedIn) => {
    console.log(response);
    setSignedIn(false);
};

const Login = (props) => (
    <GoogleLogin
        tag='a'
        className='login'
        clientId='1077933054139-21a3tlat8esqqhcf78u0ugtcftlh3vp5.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={(response) => onSuccess(response, props)}
        onFailure={(response) => onFailure(response, props)}
    />
);

Login.propTypes = {
    setSignedIn: func,
    setProfile: func,
    setToken: func
};

export default Login;