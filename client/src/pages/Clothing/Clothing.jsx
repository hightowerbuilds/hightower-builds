
import './Clothing.css'
import NavBar from "../../components/NavBar/NavBar"
import { useState } from 'react'
import Pants from '../../components/ClothingFeatures/Pants/Pants';

export default function Store() {

const [arrow, setArrow] = useState(false)
const handleArrow = () => { arrow ? setArrow(false) : setArrow(true)}


  return (
    <div >

      <NavBar />  

      <div className='mainClothingContainer'>
      

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
          arrow ?  <Pants />: ''
        }
        
      </div>
 
    </div>
  )

  }

  
  