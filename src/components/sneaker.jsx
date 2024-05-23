import React from 'react'
import data from './sneaker-data'
import AddToCart from './add-to-cart'

function sneaker({isCount, addCount, subtractCount, item, addItem, removeItem}) {
  return (
    <div className='sneaker'>
    <div className='sneaker-info'>
      <h3>SNEAKER COMPANY</h3>
      <h1>{data.title}</h1>
      <p>{data.features}</p>
      
      <div className="price">
        <h2>${data.currentPrice} <span>50%</span></h2>
        <p>${data.oldPrice}</p>
      </div>

    </div>

    <AddToCart isCount={isCount} addCount={addCount} subtractCount={subtractCount} item={item} addItem={addItem} removeItem={removeItem}/>
    </div>
  )
}

export default sneaker
