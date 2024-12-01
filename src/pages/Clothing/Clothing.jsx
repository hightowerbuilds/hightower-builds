
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
const [ clickWords, setClickWords ] = useState();
const [ currentIndex, setCurrentIndex ] = useState(0)
const [ storeOpen, setStoreOpen] = useState(false)

useEffect( () => {
  const fetchGrassImage = async () =>  {
    const { data, error } = await supabase.storage.from('images').getPublicUrl('landscape/grass.JPG')
    setGrassImage(data.publicUrl)
  }

  const fetchGrassWithSeed = async () => {
    const { data , error } = await supabase.storage.from('images').getPublicUrl('landscape/grassWithSeed.JPG')
    setGrassWithSeed(data.publicUrl)
  }

  const fetchGreenGrass = async () => {
    const { data, error } = await supabase.storage.from('images').getPublicUrl('landscape/greenGrass.JPG')
    setGreenGrass(data.publicUrl)
  }

  const fetchBeautifulUgly = async () => {
    const { data, error } = await supabase.storage.from('images').getPublicUrl('landscape/beautifulUgly.JPG')
    setBeautifulUgly(data.publicUrl)
  }

  const fetchWeirdDeer = async () => {
    const { data, error } = await supabase.storage.from('images').getPublicUrl('landscape/weirdDeer.JPG')
    setWeirdDeer(data.publicUrl)
  }

  const fetchMossForest = async () => {
    const { data, error } = await supabase.storage.from('images').getPublicUrl('landscape/moss-forest.jpg')
    setMossForest(data.publicUrl)
  }

  const fetchClickWords = async () => {
    const { data, error } = await supabase.storage.from('images').getPublicUrl('landscape/fernsUnfurl.JPG')
    setClickWords(data.publicUrl)
  }

  fetchGrassImage();
  fetchGrassWithSeed();
  fetchGreenGrass();
  fetchBeautifulUgly();
  fetchWeirdDeer();
  fetchMossForest();
  fetchClickWords();

}, [] )

  const images = [grassImage, grassWithSeed, greenGrass, beautifulUlgy, weirdDeer, mossForest]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length); 
    }, 7000)
  
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  const handleStoreOpen = () => { !storeOpen ? setStoreOpen(true) : setStoreOpen(false)}
  const handleStoreClose = () => { storeOpen ? setStoreOpen(false): ''}


  return (
    <div style={{
      display: 'flex',
      backgroundImage: `url(${clickWords})`, 
      backgroundSize: 'cover',
      height: '120vh',
      width: '100%'
    }} >

      <NavBar />
     { grassImage ? 
     <>
     <img src={images[currentIndex]} className='landscapeBackground' /> 
     </>
    : 'loading'}
    
    {
      storeOpen ? 
      <div className='storeContainer'>
      here is the store 
      <button onClick={handleStoreClose}>close store</button>
      </div> :  
      <button onClick={handleStoreOpen}>
      <img src={clickWords} className='clickWords'  />
      </button>
    }
   
    </div>
  )

  }