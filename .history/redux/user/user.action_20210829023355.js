import UserActionTypes from "./user.types";



export const getProducts = () => ({
  type: UserActionTypes.GET_USER_DETAILS
})
export const loadProducts = (walletDetails) => ({
  type: UserActionTypes.LOAD_WALLET_DETAILS,
  payload: walletDetails
})

export const refresh = (refresh) => ({
  type: UserActionTypes.REFRESH,
  payload: refresh
})