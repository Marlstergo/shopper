import UserActionTypes from "./user.types";
const INITIAL_STATE = {
  
  userDetail: {},
  paymentLinks: null,
  walletDetails: null,
  refresh: 'refre',
  

};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    

    

    case UserActionTypes.LOAD_PAYMENTlINKS:
      return{
        ...state,
        paymentLinks: action.payload
      }

    case UserActionTypes.LOAD_WALLET_DETAILS:
      return{
        ...state,
        walletDetails: action.payload
      }
    
      case UserActionTypes.LOAD_USER_DETAILS:
      return{
        ...state,
        userDetail: action.payload
      }

    case UserActionTypes.REFRESH:
      return{
        ...state,
        refresh: action.payload
      }



    default:
      return state;
  }
};

export default userReducer;
