
import './HomePage.css'
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase';

export default function HomePage() {

  const [ image, setImage ] = useState();

  useEffect(() => {

    const fetchEagle = async () => {
      const { data, error } =  await supabase.storage.from('images').getPublicUrl('eagle-photos/eagle.jpg')
      setImage(data.publicUrl)

    }

    fetchEagle()
     
  }, [])





  return (
    <div style={{ width: '100%'}}>
     { image ?  <img src={image} className='eagleBackground' /> : 'loading'}
        <NavBar />

     

        <div className='homePageContainer'>
        
        </div>
    </div>
  )
}
