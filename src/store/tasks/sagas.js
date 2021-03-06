import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../service/httpServier";
import * as utils from "../../utils";


function* getTitles(index, tab_info) {
    if (tab_info.titles.length > 0 && tab_info.titles.length - 1 < tab_info.num) {

    }
}


function* getCourseInfoList(action) {
    try {
        let index = action.value.index;
        let tab_info = action.value.tab_info;
        let search_date = action.value.search_date;
        // tab_info = JSON.parse(JSON.stringify(tab_info));

        if (search_date || index === null || index === undefined || tab_info.titles.length < tab_info.num) {
            tab_info.titles = [];
            let date1 = search_date ? new Date(search_date) : new Date();
            for (let i = 0; i < tab_info.num; i++) {
                tab_info.titles.push({
                    title: utils.getNextDayStr(date1, i - tab_info.current),
                    time: utils.getNextDay(date1, i - tab_info.current),
                })
            }
        }

        if (index > 0 && index < tab_info.num - 1) {
            tab_info.current = index;
        }
        console.log(tab_info)
        if (tab_info.titles.length > 0) {
            if (index === 0 || index === tab_info.num - 1) {
                let time = search_date ? new Date(search_date) : new Date(tab_info.titles[index].time);
                console.log(time)
                tab_info.current = 2;
                tab_info.titles = [];
                for (let i = 0; i < tab_info.num; i++) {
                    tab_info.titles.push({
                        title: utils.getNextDayStr(time, i - tab_info.current),
                        time: utils.getNextDay(time, i - tab_info.current),
                    })
                }
            }
        }


        let data = yield http.GET(api.QueryCourse,
            {
                time: tab_info.titles[tab_info.current].time,
                pi: 1,
                ps: 10,
            }
        );
        if (!data) {
            return
        }
        let d = []
        for (let i = 0; i < data.data.length; i++) {
            let item1 = data.data[i]
            let item = {
                id: 0,
                name: "",
                teacher: "",
                description: "",
                start_time: "",
                end_time: "",
                start_date:"",
                end_date:"",
                week: "",
            }

            for (const itemElement in item1) {
                if (item1.hasOwnProperty(itemElement)){
                    item[itemElement] = item1[itemElement]
                }
            }
            d.push(item)
        }
        if (!Array.isArray(d) || d?.length < 0) {
            d = [{}, {}, {}, {}, {}, {}, {}]
        }
        yield put(actionCreators.changeCourseInfoList(d));
        yield put(actionCreators.changeTabInfo(tab_info));

        // // console.log("data", data, action)
    } catch (e) {
        console.log(e, 123)
    }
}

function* mySaga() {
    yield takeEvery(constants.GET_COURSE_INFO_LIST, getCourseInfoList);
}

export default mySaga;
