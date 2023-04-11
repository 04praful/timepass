import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import "./cart.css";
import Items from './Items';
import { products } from './products';

const Cart = () => {

  const [item, setItem] = useState(products);

  return (
    <>
    <header>
        <div className='continue-shopping'>
            <img src='./images/arrow.png' alt='arrow' className='arrow-icon'/>
            <h3>continue shopping</h3>
        </div>
        <div className='cart-icon'>
          <img src='./images/cart.png' alt='arrow'/>
          <p>4</p>
        </div>
    </header>
    <section className='main-cart-section'>
      <h1>Shopping Cart</h1>
      <p className='total-items'>you have <span className='total-items-count'>7</span> Shopping Cart</p>
      <div className='cart-items'>
       <div className='cart-items-container'>
       <Scrollbars>
        {
          item.map((cur)=>{
            return <Items/>
          })
        }
        
        </Scrollbars>

      </div>
    </div>

    <div className='card-total'>
      <h3>Cart Total : <span>2200Rs</span></h3>
      <button>checkout</button>
    </div>

    </section>
    </>
  )
}

export default Cart