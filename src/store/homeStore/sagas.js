import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
import {api, http} from "../../service/httpServier";


function* getListData(action) {
    try {
        const data = yield http.GET(api.QueryProduct, action.value, {});
        console.log(data)
        let d = []
        for (let i = 0; i < data.data.length; i++) {
            let item1 = data.data[i]
            let item = {
                id: 0,
                img_url: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
                name: "电脑💻",
                user_icon: "https://img1.baidu.com/it/u=1600490630,2806686848&fm=26&fmt=auto",
                detail: "ufhgusdighfughfdiughdfiu",
                user_name: "2312",
                price: 123,
                old_price: 90,
                is_like: 1,
            }

            for (const itemElement in item1) {
                if (item1.hasOwnProperty(itemElement)){
                    item[itemElement] = item1[itemElement]
                }
            }
            d.push(item)
        }
        yield put(actionCreators.changeListData(d));
    } catch (e) {
        console.log(e)
    }
}

function* mySaga() {
    yield takeEvery(constants.GET_LIST_DATA, getListData);
}

export default mySaga;
