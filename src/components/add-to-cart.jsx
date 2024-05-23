import React from 'react'
import plus from '../assets/icon-plus.svg'
import minus from '../assets/icon-minus.svg'
import cart from '../assets/icon-cart-white.svg'

function addToCart({isCount, addCount, subtractCount, addItem}) {
  
  return (
    <div className='add-to-cart'>
      <div className="count">
        <div className="sign minus" onClick={subtractCount}><img src={minus} alt="" /></div>
        <div className="digit">{isCount}</div>
        <div className="sign plus" onClick={addCount}><img src={plus} alt="" /></div>
      </div>
      <button onClick={addItem}>
        <img src={cart} alt="" />
        
        <p>Add to cart</p>
      </button>
    </div>
  )
}

export default addToCart;

