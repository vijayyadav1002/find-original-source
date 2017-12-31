import {SAVE_CURRENT_SOURCE_CODE, CLEAR_CURRENT_SOURCE_CODE, INSERT_SOURCE_CODE, UPDATE_SOURCE_CODE, DELETE_SOURCE_CODE} from '../actions';
import {Map, List} from 'immutable';

const defaultState = Map({
    savedSourceCodeList: List()
});

const sourceCodeMapper = {
    [SAVE_CURRENT_SOURCE_CODE]: (state, {currentSourceCode, index = 0}) => {
        return state.merge({currentSourceCode, index});
    },
    [CLEAR_CURRENT_SOURCE_CODE]: (state) => {
        return state
            .delete('currentSourceCode')
            .delete('index');
    },
    [INSERT_SOURCE_CODE]: (state, {sourceCode}) => {
        return state.update('savedSourceCodeList', list => list.push(sourceCode));
    },
    [UPDATE_SOURCE_CODE]: (state, {sourceCode, index}) => {
        return state.update('savedSourceCodeList', list => list.update(index, () => sourceCode));
    },
    [DELETE_SOURCE_CODE]: (state, {index}) => {
        return state.update('savedSourceCodeList', list => list.delete(index));
    }
};

const sourceCodeReducer = (state = defaultState, action) => sourceCodeMapper[action.type] ? sourceCodeMapper[action.type](state, action) : state;

export default sourceCodeReducer;