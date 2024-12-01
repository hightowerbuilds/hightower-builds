
import './WebDev.css'
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase';

export default function WebDev() {

  const [ blueSky, setBlueSky ] = useState();
  const [ aloePlant, setAloePlant ] = useState();
  const [ deskLamp, setDeskLamp ] = useState();
  const [ ceilingLight, setCeilingLight ] = useState();
  const [ currentIndex, setCurrentIndex ] = useState(0);


  useEffect(() => {
    const fetchImage = async (imageName) => {
      try {
        const { data, error } = await supabase.storage.from('images').getPublicUrl(`webdev/${imageName}.JPG`);
        if (error) throw error; 
  
        switch (imageName) {
          case 'blueSky':
            setBlueSky(data.publicUrl);
            break;
          case 'aloePlant':
            setAloePlant(data.publicUrl);
            break;
          case 'ceilingLight':
            setCeilingLight(data.publicUrl);
            break;
          case 'deskLamp':
            setDeskLamp(data.publicUrl);
            break;
          default:
            console.error(`Unexpected image name: ${imageName}`);
        }
      } catch (error) {
        console.error(`Error fetching image ${imageName}:`, error);
      }
    };
  
    fetchImage('blueSky');
    fetchImage('aloePlant');
    fetchImage('ceilingLight');
    fetchImage('deskLamp');
  
  }, []);

  
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
