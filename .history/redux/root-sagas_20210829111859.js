import {all, call} from 'redux-saga/effects'
import {userSagas} from './user/user.sagas'
import { cartSagas } from './cart/cart.saga';
s

export default function* rootSaga(){
    yield all([
        call(userSagas),  
        call(cartSagas)    

    ])
}