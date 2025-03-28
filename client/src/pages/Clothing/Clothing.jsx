
import './Clothing.css'

import { useState, useEffect } from 'react'
import { supabase } from '../../services/supabase';

import NavBar from "../../components/NavBar/NavBar"
import Pants from '../../components/ClothingFeatures/Pants/Pants';
import Shirts from '../../components/ClothingFeatures/Shirts/Shirts';
import Sweatshirts from '../../components/ClothingFeatures/Sweatshirts/Sweatshirts'
import Bags from '../../components/ClothingFeatures/Bags/Bags'

export default function Store() {

  const [clothingFeature, setClothingFeature] = useState()
  const [sweatShirt, setSweatShirt] = useState();
  const [shirt, setShirt] = useState();
  const [bag, setBag] = useState();
  const [pant, setPant] = useState();

  const components = {
      pants:        <Pants />,
      shirts:       <Shirts />,
      sweatshirts:  <Sweatshirts />,
      bags:         <Bags />
  }

useEffect(() => {

    const fetchSweatShirt = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/sweatshirtSketch.png');
      setSweatShirt(data.publicUrl)
      }

      const fetchShirt = async () => {
        const { data, error } = await supabase.storage.from('images').getPublicUrl('words/shirtsSketch.png')
        setShirt(data.publicUrl)
      }

      const fetchBag = async () => {
        const { data, error } = await supabase.storage.from('images').getPublicUrl('words/bagsSketch.png')
        setBag(data.publicUrl)
      }

      const fetchPant = async () => {
        const { data, error } = await supabase.storage.from('images').getPublicUrl('words/pantsSketch.png')
        setPant(data.publicUrl)
      }

      fetchPant();
      fetchBag();
      fetchShirt();    
      fetchSweatShirt();
}, [])



  return (
    <div >

      <NavBar />  

      <div className='mainClothingContainer'>
        <div className='clothingItemsContainer'>
            <div onClick={() => {setClothingFeature(components.sweatshirts)}}>
            <img src={sweatShirt} className='clothingFeatureImage' />
            </div>

            <div onClick={() => {setClothingFeature(components.shirts)}}>
            <img src={shirt} className='clothingFeatureImage' />
            </div>

            <div onClick={() => {setClothingFeature(components.bags)}}>
            <img src={bag} className='clothingFeatureImage' />
            </div>

            <div onClick={() => {setClothingFeature(components.pants)}} >
            <img src={pant} className='clothingFeatureImage' />
            </div>
        </div>

        {clothingFeature}
        
      </div>
 
    </div>
  )

  }

  
  