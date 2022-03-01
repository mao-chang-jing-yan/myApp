import {combineReducers} from "redux-immutable";
import {reducer as homeReducer} from "./homeStore"
import {reducer as userReducer} from "./userStore"
import {reducer as searchReducer} from "./searchStore"
import {reducer as detailReducer} from "./detailStore"
import {reducer as loginReducer} from "./loginStore"
import {reducer as indexReducer} from "./indexStore"


const reducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    search: searchReducer,
    detail: detailReducer,
    login: loginReducer,
    index: indexReducer,
})

export default reducer
