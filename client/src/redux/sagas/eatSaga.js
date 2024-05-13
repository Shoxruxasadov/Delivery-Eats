import { takeEvery, call, put } from "redux-saga/effects";
import {
  getAllEats,
  getDrinks,
  getPizza,
  getBurgers,
  getSweets,
} from "../reducers/eatReducer";
import axios from "axios";

function* workGetEatsAll() {
  const res = yield axios.get("http://localhost:3030/eats");
  yield put(getAllEats(res.data));
}

function* workGetDrinks() {
  const res = yield axios.get("http://localhost:3030/eats?category=drinks");
  yield put(getDrinks(res.data));
}

function* workGetPizza() {
  const res = yield axios.get("http://localhost:3030/eats?category=pizza");
  yield put(getPizza(res.data));
}

function* workGetBurgers() {
  const res = yield axios.get("http://localhost:3030/eats?category=burgers");
  yield put(getBurgers(res.data));
}

function* workGetSweets() {
  const res = yield axios.get("http://localhost:3030/eats?category=sweets");
  yield put(getSweets(res.data));
}

function* workAddEats(action) {
  yield axios.post("http://localhost:3030/eats", action.payload);
  workGetEatsAll();
}

function* workEditEat(action) {
  console.log("HELLO");
  yield axios.put("http://localhost:3030/eats?id=" + action.payload.id, action.payload);
  workGetEatsAll();
}

export default function* eatSaga() {
  yield takeEvery("GET_EATS_ALL", workGetEatsAll);
  yield takeEvery("GET_DRINKS", workGetDrinks);
  yield takeEvery("GET_PIZZA", workGetPizza);
  yield takeEvery("GET_BURGERS", workGetBurgers);
  yield takeEvery("GET_SWEETS", workGetSweets);
  yield takeEvery("ADD_EATS", workAddEats);
  yield takeEvery("EDIT_EAT", workEditEat);
}
