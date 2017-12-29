import {SET_PROFILE} from '../actions';
import {Map} from 'immutable';

const defaultState = Map({});

const profileMapper = {
    [SET_PROFILE]: (state = defaultState, {profile}) => {
        return state.merge({ ...profile });
    }
};

const profileReducer = (state = defaultState, action) => profileMapper[action.type] ? profileMapper[action.type](state, action) : state;

export default profileReducer;