const SIGNED_IN = 'SIGNED_IN';
const SET_PROFILE = 'SET_PROFILE';
const SET_TOKEN = 'SET_TOKEN';

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

export {
    SIGNED_IN,
    SET_PROFILE,
    SET_TOKEN,
    setSignedIn,
    setProfile,
    setToken
};