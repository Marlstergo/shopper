import UserActionTypes from "./user.types";

import axios from "axios";
import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  loadPaymentLinks,
  loadUserDetails,
  loadWalletDetails,
  refresh,
} from "./user.action";

export function* updateLink() {
  try {
    const res = yield axios.get(
      `${process.env.REACT_APP_API_URL}/business/getlinks?page=1&limit=5`
    );
    const data = yield res.data;
    console.log(data);
    yield put(loadPaymentLinks(data));
    // loadPaymentLinks()
    // return data;
  } catch (err) {
    console.log(err);
    if (err.response && err.response.statusText === "Not Paymentlink Found") {
    }
  }
}
export function* fetchWalletDetails() {
  try {
    // console.log('fetching wallet')
    const res = yield axios.get(
      `${process.env.REACT_APP_API_URL}/business/getwallet`
    );
    const data = yield res.data.data;
    console.log(res);
    yield put(loadWalletDetails(data));
  } catch (err) {
    console.log(err);
    console.log("wallet error");
  }
}
export function* fetchBusinessDetails() {
  try {
    const res = yield axios.get(
      `${process.env.REACT_APP_API_URL}/business/getbusiness`
    );
    const data = yield res.data.data;
    // console.log(data);
    // console.log(res);
    yield put(loadUserDetails(data));
  } catch (error) {
    // console.log(err)
    // console.log("wallet error")
    // if (error.response) {
    //   toast.error(error.response.data.err);
    // }
    if (error.message === "Request failed with status code 404") {
      toast.error("Network Error");
    }
    if (error.message === "Network Error") {
      toast.error(error.message);
    }
  }
}

export function* updatePaymentLinks() {
  yield takeLatest(UserActionTypes.UPDATE_PAYMENTLINK_TABLE, updateLink);
}
export function* getWallet() {
  yield takeLatest(UserActionTypes.GET_WALLET_DETAILS, fetchWalletDetails);
}
export function* getDetails() {
  yield takeLatest(UserActionTypes.GET_USER_DETAILS, fetchBusinessDetails);
}

export function* userSagas() {
  yield all([call(updatePaymentLinks), call(getWallet), call(getDetails)]);
}
