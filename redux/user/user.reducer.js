import UserActionTypes from "./user.types";
const INITIAL_STATE = {
  
  userDetail: {},
  products: null,
  refresh: 'refresh',
  

};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    

    

    
      

    case UserActionTypes.LOAD_PRODUCTS:
      return{
        ...state,
        products: action.payload
      }



    default:
      return state;
  }
};

export default userReducer;
