const SIGNED_IN = 'SIGNED_IN';

const setSignedIn = isSignedIn => ({
    type: SIGNED_IN,
    isSignedIn
});

export {
    SIGNED_IN,
    setSignedIn
};