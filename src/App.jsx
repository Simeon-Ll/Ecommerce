import React, { useState } from 'react'
import Nav from './components/nav'
import Gallery from './components/gallery'
import Sneaker from './components/sneaker'

function App() {
  const [isCount, setIsCount] = React.useState(0)

  function addCount(){
    setIsCount(oldValue => oldValue + 1)
  }

  function subtractCount(){
    setIsCount(oldValue => {
      if (oldValue == 0) {
        return oldValue = 0
      }else{
        return oldValue - 1
        
      }
    })
  }

  const [item, setItem] = useState(false)
  function addItem(){
    setItem(prev =>{
      if (isCount === 0) {
        return false
      }else{
        return true
      }
  })
  }
  function removeItem(){
    setItem(prev => false)
  }
  return (
    <>
      <Nav count={isCount} item={item} removeItem={removeItem}/>
      <div className='cont' >
        <Gallery />
        <Sneaker isCount={isCount} addCount={addCount} subtractCount={subtractCount} item={item} addItem={addItem} removeItem={removeItem}/>
        
      </div>
    </>
  )
}

export default App
