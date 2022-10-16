import { all, call, put, takeEvery } from 'redux-saga/effects'
const url = "https://62bb0520573ca8f83290fcc0"
function callApi(url) {
  return fetch(url).then(
    res => res.json()
  )
}


export function* callandGetData() {
  try {
    const response = yield call(callApi, url)
    yield put({type: "GET_API_SUCCESS", 
    payload: response})
    alert(1)
    yield put({
      type: "SHOWSNACKBAR", 
      data: {
      message: "Show thanh cong",
      variant: "success"
    }})
  }
  catch {
   

    console.log('error')
    yield put({
      type: "SHOWSNACKBAR", 
      data: {
      message: "Show that bai",
      variant: "error"

    }})
  }

}
function* watchIncrementAsync() {
  yield takeEvery('START_CALL_API', callandGetData)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}