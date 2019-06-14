import {SET_ID, SET_NAME, SET_BIRTHDATE, SET_ADDRESS, SET_PICTURE} from '../actions';

const credentials = (state = {}, action) => {
    switch (action.type) {
        case SET_ID:
        case SET_NAME:
        case SET_BIRTHDATE:
        case SET_ADDRESS:
        case SET_PICTURE:
            return Object.assign({}, state, action);
        default: 
            return state;
    }
}
  
export default credentials;