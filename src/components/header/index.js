import React from 'react';
import {Link} from 'react-router-dom';
import {Login, Logout, If} from '../';
import './header.css';

const Header = ({isSignedIn = false, ...otherProps} ) => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <If condition={!isSignedIn}>
                    <li className='login'>
                        <Login {...otherProps}/>
                    </li>
                </If>
                <If condition={isSignedIn}>
                    <li className='logout'>
                        <Logout {...otherProps}/>
                    </li>
                </If>
            </ul>
        </nav>
    </header>
);

export default Header;