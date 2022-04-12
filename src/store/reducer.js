import {combineReducers} from "redux-immutable";
import {reducer as homeReducer} from "./homeStore"
import {reducer as userReducer} from "./userStore"
import {reducer as searchReducer} from "./searchStore"
import {reducer as detailReducer} from "./detailStore"
import {reducer as loginReducer} from "./loginStore"
import {reducer as indexReducer} from "./indexStore"
import {reducer as courseCreateReducer} from "./courseCreate"
import {reducer as courseDetailReducer} from "./courseDetail"
import {reducer as tasksReducer} from "./tasks"


const reducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    search: searchReducer,
    detail: detailReducer,
    login: loginReducer,
    index: indexReducer,
    courseCreate: courseCreateReducer,
    courseDetail: courseDetailReducer,
    tasks: tasksReducer,
})

export default reducer
