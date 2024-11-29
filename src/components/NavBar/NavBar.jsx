
import './NavBar.css'
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from '../../services/supabase';

export default function NavBar() {


  const [ homeButton, setHomeButton ] = useState();
  const [ clothingButton, setClothingButton ] = useState();
  const [ webDevButton, setWebDevButton ] = useState();
  const [ contactButton, setContactButton ] = useState();
  


  useEffect(() => {
    const fetchHomeButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('home-sketch.png')
      setHomeButton(data.publicUrl)
    }
    
    const fetchClothingButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('clothing-sketch.png')
      setClothingButton(data.publicUrl)
    }

    const fetchWebDevButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('webdev-sketch.png')
      setWebDevButton(data.publicUrl)
    }

    const fetchContactButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('contact-sketch.png')
      setContactButton(data.publicUrl)
    }

    fetchHomeButton();
    fetchClothingButton();
    fetchWebDevButton();
    fetchContactButton();

  }, [])

 




  return (
 <div className="navBarContainer">

    <NavLink to='/'>{homeButton ? <img className='homeButton' src={homeButton}></img>: 'loading'}</NavLink>
    <NavLink to='/clothing'>{clothingButton ? <img className='clothingButton' src={clothingButton}></img> : 'loading'}</NavLink>
    <NavLink to='/webdev'>{ webDevButton ? <img className='webDevButton' src={webDevButton}/> : 'loading'}</NavLink>
    <NavLink to='/contact'>{contactButton ? <img className='contactButton' src={contactButton} /> : 'loading'}</NavLink>

 </div>
  )
}
