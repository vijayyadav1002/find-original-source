import React from 'react';
import GoogleLogin from 'react-google-login';

const onSuccess = (response, setSignedIn) => {
    console.log(response);
    setSignedIn(true);
};

const onFailure = (response, setSignedIn) => {
    console.log(response);
    setSignedIn(false);
};

const Login = ({setSignedIn}) => (
    <GoogleLogin
        tag='a'
        clientId='1077933054139-21a3tlat8esqqhcf78u0ugtcftlh3vp5.apps.googleusercontent.com'
        style={{background: '#006647'}}
        buttonText='Login'
        onSuccess={(response) => onSuccess(response, setSignedIn)}
        onFailure={(response) => onFailure(response, setSignedIn)}
    />
);

export default Login;