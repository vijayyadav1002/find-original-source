import React from 'react';
import {GoogleLogout} from 'react-google-login';

const logoutSuccess = (response, setSignedIn) => {
    console.log(response);
    setSignedIn(false);
};

const Logout = ({setSignedIn}) => (
    <GoogleLogout
        tag='a'
        style={{background: '#d9534f'}}
        buttonText='Logout'
        onLogoutSuccess={(response) =>logoutSuccess(response, setSignedIn)}>
    </GoogleLogout>
);

export default Logout;