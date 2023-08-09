import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
} from "../redux/action";

const BaseURL = "	https://jsonplaceholder.typicode.com/users";

function* getUser(action) {
  try {
    const response = yield axios.get(BaseURL);
    // Sau khi lấy được dữ liệu từ fake API
    // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}

function* deleteUser(action) {
  try {
    const response = yield axios.delete(BaseURL + `/${action.payload.userId}`);
    const userId = action.payload.userId;
    // Sau khi lấy được dữ liệu từ fake API
    // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
    yield put({ type: DELETE_USER_SUCCESS, payload: { userId } });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}

export default function* rootSaga() {
  yield takeLatest(DELETE_USER, deleteUser);
  yield takeLatest(FETCH_USER, getUser);
}
