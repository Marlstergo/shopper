import UserActionTypes from "./user.types";

import axios from "axios";
import { all, call, takeLatest, put } from "redux-saga/effects";
import { loadProducts } from "./user.action";

export function* fetchShopItems() {
  try {
    const res = yield axios.get("https://fakestoreapi.com/products");
    console.log('in fets')
    console.log(res.data);
    yield put(loadProducts(res.data));
  } catch (error) {}
}
export function* getProds() {
  yield takeLatest(UserActionTypes.FETCH_PRODUCTS, fetchShopItems);
}

export function* userSagas() {
  yield all([call(getProds)]);
}
