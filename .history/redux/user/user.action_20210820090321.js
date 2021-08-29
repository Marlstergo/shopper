import UserActionTypes from "./user.types";


export const updatePaymentLinkTable = () => ({
  type: UserActionTypes.UPDATE_PAYMENTLINK_TABLE,
  
})

export const loadPaymentLinks = (links) => ({
  type: UserActionTypes.LOAD_PAYMENTlINKS,
  payload: links
})

export const getWalletDetails = () => ({
  type: UserActionTypes.GET_WALLET_DETAILS
})
export const getUserDetails = () => ({
  type: UserActionTypes.GET_USER_DETAILS
})
export const loadWalletDetails = (walletDetails) => ({
  type: UserActionTypes.LOAD_WALLET_DETAILS,
  payload: walletDetails
})
export const loadUserDetails = (userDetails) => ({
  type: UserActionTypes.LOAD_USER_DETAILS,
  payload: userDetails
})

export const refresh = (refresh) => ({
  type: UserActionTypes.REFRESH,
  payload: refresh
})