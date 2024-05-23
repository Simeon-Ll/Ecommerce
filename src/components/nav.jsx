import React from 'react'
import logo from '../assets/logo.svg'
import cart from '../assets/icon-cart.svg'
import client from '../assets/image-avatar.png'
import menu from '../assets/icon-menu.svg'
import exit from '../assets/icon-close.svg'
import bin from '../assets/icon-delete.svg'
import data from './sneaker-data'
import image from '../assets/image-product-1-thumbnail.jpg'
import { useState } from 'react'


function nav({count, item, removeItem}) {
  const [isCart, setIsCart] = React.useState(false)

  function toggleCart(){
    setIsCart(prev => !prev)
  }

  const [isMenu, setIsMenu] = React.useState(false)
  function toggleMenu() {
    setIsMenu(prev => !prev)
  }
  

  function Links(){
      return(
        <>
          <li><a href="##">Collections</a></li>
          <li><a href="##">Men</a></li>
          <li><a href="##">Women</a></li>
          <li><a href="##">About</a></li>
          <li><a href="##">Contact</a></li>
        </>
      )
  }


  return (
    <>
    <nav>

      <img src={menu} alt="" className="menu" onClick={toggleMenu} />
      {
        isMenu && <div className='sidebar'>
            <img src={exit} alt="" onClick={toggleMenu}/>
            <ul>
              <Links />
            </ul>

        </div>
      }

      <img src={logo} alt="" className="logo" />

      <ul className='nav-links'>
          <Links />
      </ul>

      <div className='right'>
        <div style={{
          position:'relative'
        }}>
          <p style={
            {
              display: item ? 'block':'none',
              position:'absolute',
              fontSize:'10px',
              color:'white',
              backgroundColor:'#ff7d1a',
              padding:'0 5px',
              borderRadius:'20px',
              right:'-5px',
              bottom:'18px'
            }
          }>{count}</p>
          <img src={cart} alt="" className="cart"  onClick={toggleCart}/> 
          
        </div>

          <img src={client} alt="" className="client" />
      </div>
    </nav>
    {isCart && 
          <div style={{
            position:'absolute',
            marginTop:'75px',
            width:'100%',
            height:'250px'
            
          }}>
            <div className='cart-box'>
              <h3>Cart</h3>
              <div className="cart-info">

                  {count === 0 || !item ? 'Your cart is empty': item ? 
                  <div style={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'15px'

                  }}>
                    <div style={{
                      display:'flex',
                      alignItems:'center'


                    }}>
                      <img src={data.image} alt="" width={'50px'} style={{
                        borderRadius:'5px'
                      }}/>
                      <div style={{
                        padding:'5px 15px',
                        fontSize:'0.8em'
                      
                      }}>
                        <p>{data.title}</p>
                        <p>{`$${data.intPrice}.00 * ${count} `}<span style={{fontWeight:'700'}}>{`$${data.intPrice * count}.00`}</span></p>

                      </div>
                      <img src={bin} alt="" onClick={removeItem}/>
                    </div>
                    <button style={{
                      all:'unset',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      height:'50px',
                      color:'#fff',
                      
                      backgroundColor:'#ff7d1a',
                      borderRadius:'10px'
                

                    }}>Checkout</button>
                    
                  </div> : false }
                  
                    
                  
                
              </div>
            </div>
          </div>
           }
    </>
  )
}

export default nav
