
import './Photograpy.css'
import NavBar from "../../components/NavBar/NavBar"
import { supabase } from '../../services/supabase';
import { useState, useEffect } from 'react'
import Gallery from '../../components/Gallery/Gallery';

export default function Photography() {

const [ photoOne, setPhotoOne ] = useState()

useEffect(() => {

  const fetchPhoto = async () => {
    const {data, error} = supabase.storage
    .from('images')
    .getPublicUrl('eagle-photos/distant-eagle.JPG')
    setPhotoOne(data.publicUrl)
  }
 
  fetchPhoto();
} ,[])  


  return (
    <div>
        <NavBar />
        <Gallery mainPhoto={photoOne} />
        {console.log(photoOne)}
    </div>
  )
}
