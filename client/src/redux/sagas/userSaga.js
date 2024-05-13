import { takeEvery, call, put } from "redux-saga/effects";
import { getUsers, getCurrentUser } from "../reducers/userReducer";
import axios from "axios";

function* workGetUsers() {
  const res = yield axios.get("http://localhost:3030/users");
  yield put(getUsers(res.data));
}

function* workAddUser(action) {
  yield axios.post("http://localhost:3030/users", action.payload);
  workGetUsers();
}

function* workCurrentUser(action) {
    const res = yield axios.get(`http://localhost:3030/users?email=${action.payload.email}&password=${action.payload.password}`);
    yield put(getCurrentUser(res.data));
}

export default function* userSaga() {
  yield takeEvery("GET_USERS", workGetUsers);
  yield takeEvery("ADD_USER", workAddUser);
  yield takeEvery("CURRENT_USER", workCurrentUser);
}
