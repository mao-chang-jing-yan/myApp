import {combineReducers} from "redux-immutable";
import {reducer as homeReducer} from "../pages/home/store"
import {reducer as userReducer} from "../pages/user/store"
import {reducer as searchReducer} from "../pages/search/store"


const reducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    search: searchReducer,


})

export default reducer
