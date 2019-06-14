export const SET_ID = 'SET_ID';
export const SET_NAME = 'SET_NAME';
export const SET_BIRTHDATE = 'SET_BIRTHDATE';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_PICTURE = 'SET_PICTURE';

export const setID = id => ({
    type: SET_ID,
    id
});

export const setName = name => ({
    type: SET_NAME,
    name
});

export const setBirthdate = birthdate => ({
    type: SET_BIRTHDATE,
    birthdate
});

export const setAddress = address => ({
    type: SET_ADDRESS,
    address
});

export const setPicture = picture => ({
    type: SET_PICTURE,
    picture
});