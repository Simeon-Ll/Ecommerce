import React from 'react'
import Img1 from '../assets/image-product-1.jpg'
import Img1Small from '../assets/image-product-1-thumbnail.jpg'
import Img2 from '../assets/image-product-2.jpg'
import Img2Small from '../assets/image-product-2-thumbnail.jpg'
import Img3 from '../assets/image-product-3.jpg'
import Img3Small from '../assets/image-product-3-thumbnail.jpg'
import Img4 from '../assets/image-product-4.jpg'
import Img4Small from '../assets/image-product-4-thumbnail.jpg'
import prev from '../assets/icon-previous.svg'
import prevOrange from '../assets/icon-previous-orange.svg'
import next from '../assets/icon-next.svg'
import nextOrange from '../assets/icon-next-orange.svg'
import { useState } from 'react'

function gallery() {

    
    const images = [Img1, Img2, Img3, Img4]
    const thumbnails = [Img1Small, Img2Small, Img3Small, Img4Small]

    const [imageIndex, setImageIndex] = useState(0)
    function nextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) {
                return 0
            }else{
                return index + 1 
            }
        })
    }
    function prevImage() {
        setImageIndex(index => {
            if (index === 0) {
                return images.length - 1
            }else{
                return index - 1 
            }
        })
    }

    const [isGallery, setIsGallery] = React.useState(false)
    function toggleGallery() {
      setIsGallery(prev => !prev)
      setColor(true)
    }
    const [isNext, setNext] = React.useState(true)
    function toggleNext(){
      setNext(prev => !prev)
    }
    const [isPrev, setPrev] = React.useState(true)
    function togglePrev(){
      setPrev(prev => !prev)
    }

  return (
    <div className='gallery' style={{}}>
      <div style={{
        width:'100%',
        height:'100%',
        position:'relative',
        display:'flex',
        overflow:'hidden'
      }}>
        {images.map(item =>(
          <img src={item} key={item} alt="" className='image' style={{translate:`${-100 * imageIndex}%`}}/>
        ))}
        

        <button className='image-slider-buttons' style={{left:'0'}} onClick={prevImage}>
          <div className='circle'>
            <img src={prev} alt="" />
          </div>
          
        </button>

        <button className='image-slider-buttons' style={{right:'0'}} onClick={nextImage}>
        <div className='circle'>
            <img src={next} alt="" />
          </div>
        </button>
      </div>
        

        
              
      <div style={{
        width:'100%',
        position:'relative'
      }}>
        <div className='select' style={{}}>
          {images.map((_, index) =>(
            <img src={thumbnails[index]} key={index} alt="" className='thumbnail' style={{border: index === imageIndex ? '3px solid #ff7d1a': 'none'}} onClick={()=> setImageIndex(index)}/>
          ))}
        
        
      </div>
      </div>
      
      
    </div>
  )
}

export default gallery
