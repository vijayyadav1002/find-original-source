import React from 'react';
import {Link} from 'react-router-dom';
import {Login, Logout, If} from '../';
import './header.css';

const Header = ({isSignedIn = false, setSignedIn = () => {}} ) => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <If condition={!isSignedIn}>
                    <li className='login'>
                        <Login setSignedIn={setSignedIn}/>
                    </li>
                </If>
                <If condition={isSignedIn}>
                    <li className='logout'>
                        <Logout setSignedIn={setSignedIn}/>
                    </li>
                </If>
            </ul>
        </nav>
    </header>
);

export default Header;