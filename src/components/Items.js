import React from "react";

const Items = () => {
    return (
        <>
        <div className='items-info'>
          <div className='product-img'>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="iage"/>
          </div>

          <div className='title'>
            <h2>samsung 21</h2>
            <p>white color</p>
          </div>

          <div className='add-minus-quantity'>
          <i className="fas fa-minus minus"></i>
          <input type='text' placeholder='2' />
          <i className="fas fa-plus plus"></i>
          </div>

          <div className='price'>
            <h3>2000Rs</h3>
          </div>

          <div className='remove-item'>
            <i className='fas fa-trash-alt remove'></i>
          </div>
          
        </div>

        <hr/>
        </>
    );
}

export default Items;