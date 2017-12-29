import React from 'react';
import GoogleLogin from 'react-google-login';

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
        clientId='1077933054139-21a3tlat8esqqhcf78u0ugtcftlh3vp5.apps.googleusercontent.com'
        style={{background: '#006647'}}
        buttonText='Login'
        onSuccess={(response) => onSuccess(response, props)}
        onFailure={(response) => onFailure(response, props)}
    />
);

export default Login;