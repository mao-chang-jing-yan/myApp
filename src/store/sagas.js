import {call, put, takeEvery, takeLatest, all, fork} from 'redux-saga/effects'
import {mySaga as homeSagas} from "./homeStore";
import {mySaga as detailSagas} from "./detailStore";
import {mySaga as indexSagas} from "./indexStore";
import {mySaga as loginSagas} from "./loginStore";
import {mySaga as searchSagas} from "./searchStore";
import {mySaga as userSagas} from "./userStore";
// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
//     try {
//         // const user = yield call(Api.fetchUser, action.payload.userId);
//         yield put({type: "USER_FETCH_SUCCEEDED", user: "user"});
//     } catch (e) {
//         yield put({type: "USER_FETCH_FAILED", message: e.message});
//     }
// }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* rootSaga() {
    // yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
    yield all([
        fork(homeSagas),
        fork(detailSagas),
        fork(indexSagas),
        fork(loginSagas),
        fork(searchSagas),
        fork(userSagas),
    ])
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* rootSaga() {
//     yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default rootSaga;
