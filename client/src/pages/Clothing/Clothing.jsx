
import './Clothing.css'
//library
import { useState } from 'react'
//components
import NavBar from "../../components/NavBar/NavBar"
import Pants from '../../components/ClothingFeatures/Pants/Pants';
import Shirts from '../../components/ClothingFeatures/Shirts/Shirts';
import Sweatshirts from '../../components/ClothingFeatures/Sweatshirts/Sweatshirts'
import Bags from '../../components/ClothingFeatures/Bags/Bags'

export default function Store() {

const [clothingFeature, setClothingFeature] = useState('')
const components = {
  pants:        <Pants />,
  shirts:       <Shirts />,
  sweatshirts:  <Sweatshirts />,
  bags:         <Bags />
}

  return (
    <div >

      <NavBar />  

      <div className='mainClothingContainer'>
      

        <div className='clothingItemsContainer'>
          <div>
            <h4> where your pants?</h4>

            <div className='itemOne' onClick={() => {setClothingFeature(components.pants)}} >
              blue jeans
            </div>
          </div>

          <div>
            <h4>sweatshirt</h4>

            <div className='itemTwo' onClick={() => {setClothingFeature(components.sweatshirts)}}>
              black hoodie
            </div>
          </div>
      
          <div>
            <h4>shirt</h4>

            <div className='itemThree' onClick={() => {setClothingFeature(components.shirts)}}>
              so many shirts it hurts
            </div>
          </div>

          <div>
            <h4>bag</h4>

            <div className='itemFour' onClick={() => {setClothingFeature(components.bags)}}>
             bag full of backpack
            </div>
          </div>

        </div>

        {
       clothingFeature
        }
        
      </div>
 
    </div>
  )

  }

  
  