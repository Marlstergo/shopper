import React from 'react'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
// import {withRouter} from 'react-router-dom'
// import Button from '../button/button.component'
// import './cart-dropdown.styles.scss'
import { hideCart } from '../../redux/cart/cart.action';
// import { products } from '../../redux/shop/shop.selector';
import { selectProducts } from '../../redux/user/user.selector';
import { useRouter } from 'next/dist/client/router';

const CartDropdown = ({cartItems, hideCart, }) =>{
    const route = useRouter()
    
    return(
    <div className='cart-dropdown absolute w-[300px] h-[340px] flex flex-col p-[20px] border-2 border-black bg-white top-[80px] right-[40px] z-50'>
        <div className='cart-items h-[240px] flex flex-col overflow-y-scroll '>
        
            {
                cartItems.length?
                cartItems.map( product => <CartItem className='cart-item' key={product.id} item={product}/>): 
                <span className='empty-message'>
                    Your cart is empty.
                </span>
                
            }
        </div>
        <button className="bg-gray-700 hover:bg-gray-900 text-white my-auto"  onClick={() => {
            route.push('/checkout');
            hideCart()
        }
            } 
            inverted>GO TO CHECKOUT</button>
    </div>
)}

const mapDispatchToProps = dispatch =>({
    hideCart: () => dispatch(hideCart())
})

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    products: selectProducts
});
        
export default connect(mapStateToProps,mapDispatchToProps)(CartDropdown);