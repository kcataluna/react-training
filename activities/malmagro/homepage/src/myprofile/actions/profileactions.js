export function formChanged(id, newValue){
    let ret;
    switch(id){
        case "fname":
            ret = {
                type: "FNAME_CHANGED",
                fname: newValue
            }
            break;
        case "mname":
            ret = {
                type: "MNAME_CHANGED",
                mname: newValue
            }
            break;
        case "lname":
            ret = {
                type: "LNAME_CHANGED",
                lname: newValue
            }
            break;
        case "gender":
            ret = {
                type: "GENDER_CHANGED",
                gender: newValue
            }
            break;
        case "nationality":
            ret = {
                type: "NATIONALITY_CHANGED",
                nationality: newValue
            }
            break;
        case "picture":
            ret = {
                type: "PICTURE_CHANGED",
                picture: newValue
            }
            break;
        
        default: ret = null;
    }
    return ret
}