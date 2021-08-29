import UserActionTypes from "./user.types";



export const getProducts = () => ({
  type: UserActionTypes.FETCH_PRODUCTS
})
export const loadProducts = (products) => ({
  type: UserActionTypes.LOAD_PRODUCTS,
  payload: products
})

export const refresh = (refresh) => ({
  type: UserActionTypes.REFRESH,
  payload: refresh
})