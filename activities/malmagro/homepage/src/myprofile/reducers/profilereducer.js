export function profileState(state="", action){
    switch(action.type){
        case "FNAME_CHANGED":
            return {...state, fname:action.fname}
        case "MNAME_CHANGED":
            return {...state, mname:action.mname}
        case "LNAME_CHANGED":
            return {...state, lname:action.lname}
        case "GENDER_CHANGED":
            return {...state, gender:action.gender}
        case "NATIONALITY_CHANGED":
            return {...state, nationality:action.nationality}
        case "PICTURE_CHANGED":
                return {...state, picture:action.picture}
        default:
            return state
    }
}
