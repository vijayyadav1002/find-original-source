import React from 'react';
import {GoogleLogout} from 'react-google-login';

const logoutSuccess = (response, props) => {
    console.log(response);
    props.setSignedIn(false);
    props.setProfile({});
    props.setToken({});
};

const Logout = (props) => (
    <GoogleLogout
        tag='a'
        style={{background: '#d9534f'}}
        buttonText='Logout'
        onLogoutSuccess={(response) =>logoutSuccess(response, props)}>
    </GoogleLogout>
);

export default Logout;