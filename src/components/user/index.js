import React from 'react';
import {instanceOf} from 'prop-types';
import {Map} from 'immutable';
import {Logout} from '../';
import './user.css';

const User = props => (
    <div className='user-container'>
        <div className='user-display'>
            <div className='user-image'><img src={props.profile.get('imageUrl')} title='user image'/></div>
            <div className='user-name'>{props.profile.get('name')}</div>
        </div>
        <Logout {...props}/>
    </div>
);

User.propTypes = {
    profile: instanceOf(Map)
};

export default User;