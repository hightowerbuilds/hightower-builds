
import './Clothing.css'
import NavBar from "../../components/NavBar/NavBar"
import { useState, useEffect } from 'react'
import { supabase } from '../../services/supabase';

export default function Store() {

const [arrow, setArrow] = useState(false)

const [ eagleStalk, setEagleStalk ] = useState();
const [ distantEagle, setDistantEagle ] = useState();
const [ eagleCloseUp, setEagleCloseUp ] = useState();
const [ eagleStick, setEagleStick ] = useState();

const [ index, setIndex ] = useState(0);

useEffect(() => {

 const fetchImages = async () => {

  const images = [
    {path: 'eagle-photos/eagleStalk.jpg', setPath: setEagleStalk},
    {path: 'eagle-photos/distant-eagle.JPG', setPath: setDistantEagle },
    {path: 'eagle-photos/eagle-closeup-2.JPG', setPath: setEagleCloseUp },
    {path: 'eagle-photos/eagle-stick-2.JPG', setPath: setEagleStick },
  ]
  
  const fetchImageBank = images.map(async (image) => {
  
    const { data, error } = await supabase.storage.from('images').getPublicUrl(image.path)
    if (data) { 
      image.setPath(data.publicUrl)
    } else {
      console.log('error fetching images', error)
    } 
  });
  
  await Promise.all(fetchImageBank)
  
 } 
  fetchImages();
}, [])


const handleArrow = () => {
  if (arrow === false){
    setArrow(true)
  } else {
    setArrow(false)
  }
 }

 const stage = [ eagleStalk, eagleCloseUp, eagleStick, distantEagle ]

 const handlePrev = () => {
  setIndex((prevIndex) => (prevIndex === 0 ? stage.length - 1 : prevIndex - 1));
};

const handleNext = () => {
  setIndex((prevIndex) => (prevIndex === stage.length - 1 ? 0 : prevIndex + 1));
};





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
          arrow ?       
          <div className='blueArrow'>

            <div className='imagesBlueArrow'>
              <img src={stage[index]} className='imageMain' />
              <button onClick={handlePrev} style={{marginLeft: '50%'}}>{'<<<'}</button>
              <button onClick={handleNext}>{'>>>'}</button>
              <button style={{marginLeft: '90%', marginBottom: '2%', height: '30px'}}>buy this </button>

              <div className='imageSubBank'>
                <img src={stage[0]} className='subImageA'/>
                <img src={stage[1]} className='subImageA' />
                <img src={stage[2]} className='subImageA' />
                <img src={stage[3]} className='subImageA' />
              </div>
            </div>

            <div className='interiorBlueArrow'>

              <p>pants A</p>
              <p>pants B</p>
              <p>pants C</p>
              <p>pants D</p>
         
            </div>

          </div> : ''
        }
        
      </div>
 
    </div>
  )

  }

  
  