import React from 'react';
import {func} from 'prop-types';
import {GoogleLogout} from 'react-google-login';
import './logout.css';

const logoutSuccess = (response, props) => {
    console.log(response);
    props.setSignedIn(false);
    props.setProfile({});
    props.setToken({});
};

const Logout = (props) => (
    <GoogleLogout
        tag='a'
        className='logout'
        buttonText='Logout'
        onLogoutSuccess={(response) =>logoutSuccess(response, props)}>
    </GoogleLogout>
);

Logout.propTypes = {
    setSignedIn: func,
    setProfile: func,
    setToken: func
};

export default Logout;