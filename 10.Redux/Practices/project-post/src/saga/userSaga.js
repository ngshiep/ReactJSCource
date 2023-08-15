import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
} from "../redux/action";

const BaseURL = "	https://jsonplaceholder.typicode.com/posts";

function* getPosts(action) {
  try {
    const response = yield axios.get(BaseURL);
    // Sau khi lấy được dữ liệu từ fake API
    // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
    yield put({ type: FETCH_POST_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}

function* deletePost(action) {
  try {
    const response = yield axios.delete(BaseURL + `/${action.payload.userId}`);
    const userId = action.payload.userId;
    // Sau khi lấy được dữ liệu từ fake API
    // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
    yield put({ type: DELETE_POST_SUCCESS, payload: { userId } });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}

export default function* rootSaga() {
  yield takeLatest(DELETE_POST, deletePost);
  yield takeLatest(FETCH_POST, getPosts);
}
