import Image from 'next/image';
import React from 'react';
// import './cart-item.styles.scss';

const CartItem = ({item: {image, price, title, quantity} }) =>(
    <div className='cart-item w-full flex h-[80px] mb-[15px]'>
        <Image src={image} height="30" width="30" alt="item"/>
        <div className='item-details w-[70%] flex flex-col items-start justify-center px-[10px] py-[20px]'>
            <span className='name text-base'>{title}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;