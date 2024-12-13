
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

    fetchImage('aloePlant');
    fetchImage('ceilingLight');
    fetchImage('deskLamp');
  
  }, []);


  useEffect(() => {
    const fetchForest = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('landscape/forestLongView.JPG');
      setBlueSky(data.publicUrl)
    }

    fetchForest();
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
      backgroundColor: '#242424',
      backgroundImage: `url(${blueSky})`, 
      backgroundSize: 'cover',
      height: '120vh',
      width: '100%'
    }} >

      <NavBar />

    <div className='webDevContainer'>
      <p>
        <h2 style={{ color: 'brown', backgroundColor: 'tan', display: 'flex', justifyContent: 'center'}}>websites</h2>
      <br />

      <a style={{ color: 'brown', backgroundColor: 'tan', display: 'flex', justifyContent: 'center'}} target='_blank' href="https://the-slurping-slug-app.vercel.app/">SLUGLICKER</a>
      <a style={{ color: 'brown', backgroundColor: 'tan', display: 'flex', justifyContent: 'center'}} target='_blank' href="https://brontosaurus-publications.vercel.app/">brontosaurus publications</a>
      </p>
    </div>
    </div>
  )
}
