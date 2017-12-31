import { combineReducers } from 'redux'
import signIn from './sign-in';
import profile from './profile';
import token from './token';
import sourceCode from './source-code';

const rootReducer = combineReducers({
    signIn,
    profile,
    token,
    sourceCode
});

export default rootReducer;