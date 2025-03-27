
import './NavBar.css'
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from '../../services/supabase';

export default function NavBar() {

  const [ homeButton, setHomeButton ] = useState();
  const [ clothingButton, setClothingButton ] = useState();
  const [ contactButton, setContactButton ] = useState();
  const [ photographyButton, setPhotographyButton ] = useState();
  

  useEffect(() => {
    const fetchHomeButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/homePageSketch.png')
      setHomeButton(data.publicUrl)
    }
    
    const fetchClothingButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/clothingSketch.png')
      setClothingButton(data.publicUrl)
    }

    const fetchContactButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/contactSketch.png')
      setContactButton(data.publicUrl)
    }

    const fetchPhotographyButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/photography-sketch.png')
      setPhotographyButton(data.publicUrl)
    }

    fetchHomeButton();
    fetchClothingButton();
    fetchContactButton();
    fetchPhotographyButton();

  }, [])

 
  return (
 <div className="navBarContainer">

    <NavLink to='/'>{homeButton ? <img className='navBarButtons' src={homeButton}/> : 'loading'}</NavLink>
    <NavLink to='/clothing'>{clothingButton ? <img className='navBarButtons' src={clothingButton} alt="" /> : 'loading'}</NavLink>
    <NavLink to='/photography'>{ photographyButton ? <img className='navBarButtons' src={photographyButton}/> : 'loading' }</NavLink>
    <NavLink to='/contact'>{contactButton ? <img className='navBarButtons' src={contactButton} /> : 'loading'}</NavLink>

 </div>
  )
}
