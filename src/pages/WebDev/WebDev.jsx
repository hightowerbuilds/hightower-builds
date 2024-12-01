
import './WebDev.css'
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase';

export default function WebDev() {

  const [ blueSky, setBlueSky ] = useState();
  const [ aloePlant, setAloePlant ] = useState();
  const [ deskLamp, setDeskLamp ] = useState();
  const [ ceilingLight, setCeilingLight ] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBlueSky = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('webdev/blueSky.JPG');
      setBlueSky(data.publicUrl)
    }

    const fetchAloePlant = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('webdev/aloePlant.JPG');
      setAloePlant(data.publicUrl)
    }

    const fetchCeilingLight = async () => {
      const { data, error, } = await supabase.storage.from('images').getPublicUrl('webdev/ceilingLight.JPG');
      setCeilingLight(data.publicUrl)
    }

    const fetchDeskLamp = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('webdev/deskLamp.JPG');
      setDeskLamp(data.publicUrl);
    }

    fetchBlueSky();
    fetchAloePlant();
    fetchCeilingLight();
    fetchDeskLamp();

  }, [])


  
  const images = [ aloePlant, ceilingLight, deskLamp ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length); 
    }, 7000);
  
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div style={{
      display: 'flex',
      backgroundImage: `url(${blueSky})`, 
      height: '120vh',
      width: '100%'
    }} >

      { images ?  <img src={images[currentIndex]} className='webDevBackground' /> : 'loading'}

      <NavBar />

    <div className='webDevContainer'>
    WebDev
    </div>
     
    </div>
  )
}
