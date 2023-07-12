import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';


function userloadApi(data) {
    console.log('sagas data', data) //hoho 출력
    return axios.get('http://jsonplaceholder.typicode.com/todos')
}

function* userload(action) { // 여기서 넘어오는 action 값은 dispatch payload
    try {
        const res = yield call(userloadApi, action.payload); //axios로 넘겨줄값이 있다면 두번째 인자로 action.payload 
        yield put({
            type: "USER_LOAD_SUCCESS",
            payload: res.data
        })
    } catch(err) {
        yield put({
            type: "USER_LOAD_FAILUE",
            payload: err.response.error
        })
    }
}


function* watchUserLoad() {
    yield takeLatest("USER_LOAD_REQUEST", userload)
}


export default function* user() {
    yield all([
        fork(watchUserLoad)
    ])
}