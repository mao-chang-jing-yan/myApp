import {combineReducers} from "redux-immutable";
import {reducer as homeReducer} from "../pages/home/store"
import {reducer as userReducer} from "../pages/user/store"
import {reducer as searchReducer} from "../pages/search/store"
import {reducer as detailReducer} from "../pages/detail/store"
import {reducer as loginReducer} from "../pages/login/store"
import {reducer as indexReducer} from "../pages/index/store"


const reducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    search: searchReducer,
    detail: detailReducer,
    login: loginReducer,
    index: indexReducer,
})

export default reducer
