import {SIGNED_IN} from '../actions';
import {Map} from 'immutable';

const defaultState = Map({isSignedIn: false});

const signMapper = {
   [SIGNED_IN]: (state = defaultState, {isSignedIn = true}) => {
       return state.merge({isSignedIn});
   }
};

const signInReducer = (state = defaultState, action) => signMapper[action.type] ? signMapper[action.type](state, action) : state;

export default signInReducer;