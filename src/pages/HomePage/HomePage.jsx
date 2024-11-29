
import './HomePage.css'
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase';

export default function HomePage() {

  const [ image, setImage ] = useState();
  const [ imageTwo, setImageTwo ] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);


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

    const images = [image, imageTwo]


useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((currentIndex + 1) % images.length); 
  }, 7000);

  return () => clearInterval(intervalId);
}, [images]);


  return (
    <div className='homePageContainer' >

      { image ?  <img src={images[currentIndex]} className='eagleBackground' /> : 'loading'}
    
        <NavBar />

      


    </div>
  )
}
