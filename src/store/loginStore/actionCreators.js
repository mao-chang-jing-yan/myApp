import {constants} from "./index";

export const changeUserName = (str) => {
    return {
        type: constants.CHANGE_USER_NAME,
        value: str
    }
}

export const changePassword = (str) => {
    return {
        type: constants.CHANGE_PASSWORD,
        value: str
    }
}


