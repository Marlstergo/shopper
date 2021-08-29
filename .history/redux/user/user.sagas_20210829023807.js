import UserActionTypes from "./user.types";

import axios from "axios";
import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  loadProducts,
  
} from "./user.action";


export function* fetchShopItems () {
  try{
      const res = yield axios.get('https://fakestoreapi.com/products')
      console.log(res.data)
      yield put(loadProducts(res.data))

  }catch(error){

  }
}
export function* getProds() {
  yield takeLatest(UserActionTypes.UPDATE_PAYMENTLINK_TABLE, fetchShopItems);
}


export function* userSagas() {
  yield all([call(getProds)]);
}
