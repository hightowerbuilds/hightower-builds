
import './HomePage.css'
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase';

export default function HomePage() {

  const [ image, setImage ] = useState();
  const [ imageTwo, setImageTwo ] = useState();
  const [ eagleStickTwo, setEagleStickTwo ] = useState();
  const [ distantEagle, setDistantEagle] = useState();
  const [ blueSky, setBlueSky ] = useState();
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

    const fetchEagleStickTwo = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('eagle-photos/eagle-stick-2.JPG');
      setEagleStickTwo(data.publicUrl)
    }

    const fetchDistantEagle = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('eagle-photos/distant-eagle.JPG');
        setDistantEagle(data.publicUrl);
    }

    const fetchBlueSky = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('landscape/blueSky.JPG')
      setBlueSky(data.publicUrl);
    }

    fetchEagle();
    fetchEagleOnStick();
    fetchEagleStickTwo();
    fetchDistantEagle();
    fetchBlueSky();
     
    }, [])

    const images = [image, imageTwo, eagleStickTwo, distantEagle]


useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((currentIndex + 1) % images.length); 
  }, 7000);

  return () => clearInterval(intervalId);
}, [images]);


  return (
    <div style={{
      height: '110vh',
      width: '100%',
      backgroundImage: `url(${blueSky})`, 
      backgroundSize: 'cover'
    }} >

      { image ?  <img src={images[currentIndex]} className='eagleBackground' /> : 'loading'}
    
        <NavBar />

      
      <div className='orangeBar'>
       Who is that?
        <br />
        <br />
        Well, if i really knew my ears might hurt.
        I sure do like those big ol' monsters though, swoop saavy
        with all their thoughts, all over this town.
       <br />
       <br />
       But a sweatshirt sure sounds right. Sure don't hurt, 
       keeping my arms in warm places, 
       like keeping your presents special through the holidays.
       <br />
       <br />
     
      </div>

    </div>
  )
}
