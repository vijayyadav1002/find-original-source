const SIGNED_IN = 'SIGNED_IN';
const SET_PROFILE = 'SET_PROFILE';
const SET_TOKEN = 'SET_TOKEN';
const SAVE_CURRENT_SOURCE_CODE = 'SAVE_CURRENT_SOURCE_CODE';
const UPDATE_SOURCE_CODE = 'UPDATE_SOURCE_CODE';
const INSERT_SOURCE_CODE = 'INSERT_SOURCE_CODE';
const DELETE_SOURCE_CODE = 'DELETE_SOURCE_CODE';
const CLEAR_CURRENT_SOURCE_CODE = 'CLEAR_CURRENT_SOURCE_CODE';

const setSignedIn = isSignedIn => ({
    type: SIGNED_IN,
    isSignedIn
});

const setProfile = profile => ({
    type: SET_PROFILE,
    profile
});

const setToken = token => ({
   type: SET_TOKEN,
   token
});

const saveCurrentSourceCode = ({currentSourceCode, index}) => ({
    type: SAVE_CURRENT_SOURCE_CODE,
    currentSourceCode,
    index
});

const updateSourceCode = ({sourceCode, index}) => ({
    type: UPDATE_SOURCE_CODE,
    sourceCode,
    index
});

const insertSourceCode = ({sourceCode, index}) => ({
    type: INSERT_SOURCE_CODE,
    sourceCode
});

const deleteSourceCode = ({index}) => ({
    type: DELETE_SOURCE_CODE,
    index
});

const clearCurrentSourceCode = () => ({
   type: CLEAR_CURRENT_SOURCE_CODE
});

export {
    SIGNED_IN,
    SET_PROFILE,
    SET_TOKEN,
    SAVE_CURRENT_SOURCE_CODE,
    CLEAR_CURRENT_SOURCE_CODE,
    UPDATE_SOURCE_CODE,
    INSERT_SOURCE_CODE,
    DELETE_SOURCE_CODE,
    setSignedIn,
    setProfile,
    setToken,
    saveCurrentSourceCode,
    updateSourceCode,
    insertSourceCode,
    deleteSourceCode,
    clearCurrentSourceCode
};