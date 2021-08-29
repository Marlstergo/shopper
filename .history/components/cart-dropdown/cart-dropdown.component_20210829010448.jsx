import React from 'react'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import { hideCart } from '../../redux/cart/cart.action';
import { products } from '../../redux/shop/shop.selector';

const CartDropdown = ({cartItems, history, hideCart, products}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        
            {
                products.length?
                products.map( product => <CartItem className='cart-item' key={product.id} item={product}/>): 
                <span className='empty-message'>
                    Your cart is empty.
                </span>
                
            }
        </div>
        <Button  onClick={() => {
            history.push('/checkout');
            hideCart()
        }
            } 
            inverted>GO TO CHECKOUT</Button>
    </div>
)

const mapDispatchToProps = dispatch =>({
    hideCart: () => dispatch(hideCart())
})

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    products: products
});
        
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));