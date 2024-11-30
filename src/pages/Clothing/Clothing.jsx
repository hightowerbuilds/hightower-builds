
import './Clothing.css'
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase';

export default function Painting() {

const [ grassImage, setGrassImage ] = useState();
const [ grassWithSeed, setGrassWithSeed ] = useState();
const [ greenGrass, setGreenGrass ] = useState();
const [ beautifulUlgy, setBeautifulUgly ] = useState();

useEffect( () => {
  const fetchGrassImage = async () =>  {
    const { data, error } = await supabase.storage.from('images').getPublicUrl('landscape/grass.JPG')
    setGrassImage(data.publicUrl)
  }

  fetchGrassImage();


}, [] )


  return (
    <div className='clothingContainer'>

      <NavBar />
     { grassImage ?  <img src={grassImage} className='landscapeBackground' /> : 'loading'}
    
  
    </div>
  )
}
