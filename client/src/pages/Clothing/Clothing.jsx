
import './Clothing.css'
import NavBar from "../../components/NavBar/NavBar"

export default function Store() {




  return (
    <div >

      <NavBar />  

      <div className='mainClothingContainer'>
      <h2>clothing</h2>


        <div className='clothingItemsContainer'>
          <div>
            <h4> where your pants?</h4>

            <div className='itemOne'>
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

        

        
      </div>
 
    </div>
  )

  }

  
  