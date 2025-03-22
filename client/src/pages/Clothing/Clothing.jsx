
import './Clothing.css'
import NavBar from "../../components/NavBar/NavBar"
import { useState, useEffect } from 'react'


export default function Store() {

const [arrow, setArrow] = useState(false)


const handleArrow = () => {
  if (arrow === false){
    setArrow(true)
  } else {
    setArrow(false)
  }
 }

  return (
    <div >

      <NavBar />  

      <div className='mainClothingContainer'>
        <h2>clothing</h2>

        <div className='clothingItemsContainer'>
          <div>
            <h4> where your pants?</h4>

            <div className='itemOne' onClick={handleArrow} >
              blue jeans
            </div>
          </div>

          <div>
            <h4>sweatshirt</h4>

            <div className='itemTwo'>
              black hoodie
            </div>
          </div>
      
          <div>
            <h4>shirt</h4>

            <div className='itemThree'>
              so many shirts it hurts
            </div>
          </div>

          <div>
            <h4>bag</h4>

            <div className='itemFour'>
             bag full of backpack
            </div>
          </div>

        </div>

        {
          arrow ?       
          <div className='blueArrow'>

            <div className='imagesBlueArrow'>

            </div>

            <div className='interiorBlueArrow'>
              <p>pants A</p>
              <p>pants B</p>
              <p>pants C</p>
              <p>pants D</p>
              <p>pants E</p>
              <p>pants F</p>
            </div>

          </div> : ''
        }
        
      </div>
 
    </div>
  )

  }

  
  