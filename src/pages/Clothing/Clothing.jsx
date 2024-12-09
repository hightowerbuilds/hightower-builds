
import './Clothing.css'
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase';

export default function Painting() {

const [ grassImage, setGrassImage ] = useState();
const [ grassWithSeed, setGrassWithSeed ] = useState();
const [ greenGrass, setGreenGrass ] = useState();
const [ beautifulUlgy, setBeautifulUgly ] = useState();
const [ weirdDeer, setWeirdDeer ] = useState();
const [ mossForest, setMossForest ] = useState();
const [ fernUnfurls, setFernUnfurls ] = useState();


const [ currentIndex, setCurrentIndex ] = useState(0)
const [ storeOpen, setStoreOpen] = useState(false)

useEffect(() => {
  const fetchImage = async (imageUrl) => {
    try {
      const { data, error } = await supabase.storage.from('images').getPublicUrl(imageUrl);
      if (error) throw error;

      switch (imageUrl) {
        case 'landscape/grass.JPG':
          setGrassImage(data.publicUrl);
          break;
        case 'landscape/grassWithSeed.JPG':
          setGrassWithSeed(data.publicUrl);
          break;
        case 'landscape/greenGrass.JPG':
          setGreenGrass(data.publicUrl);
          break;
        case 'landscape/beautifulUgly.JPG':
          setBeautifulUgly(data.publicUrl);
          break;
        case 'landscape/weirdDeer.JPG':
          setWeirdDeer(data.publicUrl);
          break;
        case 'landscape/moss-forest.jpg':
          setMossForest(data.publicUrl);
          break;
        case 'landscape/fernsUnfurl.JPG':
          setFernUnfurls(data.publicUrl); 
          break;
       
        default:
          console.error(`Unexpected image URL: ${imageUrl}`);
      }
    } catch (error) {
      console.error(`Error fetching image from ${imageUrl}:`, error);
    }
  };

  fetchImage('landscape/grass.JPG');
  fetchImage('landscape/grassWithSeed.JPG');
  fetchImage('landscape/greenGrass.JPG');
  fetchImage('landscape/beautifulUgly.JPG');
  fetchImage('landscape/weirdDeer.JPG');
  fetchImage('landscape/moss-forest.jpg');
  fetchImage('landscape/fernsUnfurl.JPG');

}, []);

  const images = [grassImage, grassWithSeed, greenGrass, beautifulUlgy, weirdDeer, mossForest]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length); 
    }, 7000)
  
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  const handleStoreOpen = () => { !storeOpen ? setStoreOpen(true) : setStoreOpen(false)}
  const handleStoreClose = () => { storeOpen ? setStoreOpen(false): setStoreOpen(true)}



  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#242424',
      height: '120vh',
      width: '100%'
    }} >

      <NavBar />


     { grassImage ?  <img src={images[currentIndex]} className='landscapeBackground' />  : 'loading'}
    
    {
      storeOpen ? 
      <div className='storeContainer'>
      here is the store 
      <button onClick={handleStoreClose}>close store</button>
      </div> :  
      <button  onClick={handleStoreOpen}>   
      <img onMouseEnter={handleStoreOpen} src={fernUnfurls} className='fernUnfurls'>
      </img>
      </button>
    }
   
    </div>
  )

  }