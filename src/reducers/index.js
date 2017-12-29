import { combineReducers } from 'redux'
import signIn from './sign-in';
import profile from './profile';
import token from './token';

const rootReducer = combineReducers({
    signIn,
    profile,
    token
});

export default rootReducer;