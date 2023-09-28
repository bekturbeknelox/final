import React from 'react'
import './CartProduct.scss';

export default function CartProduct() {
  return (
    <div className='cart__product'>
        <div className='cart__product-text'>
            <span className='cart__product-title'>Name</span> 
            <span className='cart__product-blend'>blend</span>
        </div>
        <div className='cart__product-amount'>
            <span className='cart__product-title'>amount</span> 
        </div>
        <div className='cart__product-price'>
            <span className='cart__product-title'>price</span> 
        </div>
        <div className='cart__product-delete'>
            <span className='cart__product-title'>Delete</span> 
        </div>
    </div>
  )
}