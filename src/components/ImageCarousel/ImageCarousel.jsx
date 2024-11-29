import { supabase } from '../../services/supabase'
import './ImageCarousel.css'
import { useState, useEffect } from 'react'

export default function ImageCarousel() {

 const [images, setImages] = useState();

  useEffect(() => {

    const fetchImages = async () => {
      const { data } = supabase.storage.from('images').getPublicUrl('eagle.jpg')
      setImages(data.publicUrl)
      console.log(data.publicUrl)
    }
   fetchImages()
  }, [])



  return (
    <div>
      {
        images ?  
        <img style={{
          width: '100%',
          height: 'auto'
        }} src={images} /> 
        : 'loading photo'
      }
     
    </div>
  );
}