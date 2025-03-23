
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


/**
 * 
 *  create a bank of images for each item within each clothing-type
 *    
 *  item A - img1, img2, img3, img4 
 *  item B - img1, img2, img3, img4
 *  item C - img1, img2, img3, img4
 *  item D - img1, img2, img3, img4
 * 
 * 
 *  within image bank we need an ablity to rotate the images in the placement
 *  there will be a large main photo but if the user clicks on a lower photo
 *  the large photo is replace and the small photo becomes the past choice
 *  
 */



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
              <img src={eagleStalk} className='imageMain' />
              <button style={{marginLeft: '90%', marginBottom: '2%', height: '30px'}}>buy this </button>

              <div className='imageSubBank'>
                <img src={distantEagle} className='subImageA' />
                <img src={eagleCloseUp} className='subImageA' />
                <img src={eagleStick} className='subImageA' />
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

  
  