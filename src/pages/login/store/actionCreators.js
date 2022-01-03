import {constants} from "./index";

export const changeSearchStr = (str) => {
    return {
        type: constants.CHANGE_SEARCH_STR,
        value: str
    }
}



