import {SET_TOKEN} from '../actions';
import {Map} from 'immutable';

const defaultState = Map({});

const tokenMapper = {
    [SET_TOKEN]: (state = defaultState, {token}) => {
        return state.merge({ ...token });
    }
};

const tokenReducer = (state = defaultState, action) => tokenMapper[action.type] ? tokenMapper[action.type](state, action) : state;

export default tokenReducer;