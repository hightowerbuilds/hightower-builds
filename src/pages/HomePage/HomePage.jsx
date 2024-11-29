
import './HomePage.css'
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase';

export default function HomePage() {

  const [ image, setImage ] = useState();
  const [ imageTwo, setImageTwo ] = useState();

  useEffect(() => {

    const fetchEagle = async () => {
      const { data, error } =  await supabase.storage.from('images').getPublicUrl('eagle-photos/eagle.jpg')
      setImage(data.publicUrl)
    }

    const fetchEagleOnStick = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('eagle-photos/eagle-stick.jpg') 
      setImageTwo(data.publicUrl)
    }

    fetchEagle()
    fetchEagleOnStick()
     
  }, [])





  return (
    <div style={{ width: '100%'}}>

      { image ?  <img src={image} className='eagleBackground' /> : 'loading'}
      { imageTwo ?  <img src={imageTwo} className='eagleStickBackground' /> : 'loading'}
        <NavBar />

      <div className='homePageContainer'></div>


    </div>
  )
}
