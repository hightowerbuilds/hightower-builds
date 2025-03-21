
import './NavBar.css'
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from '../../services/supabase';

export default function NavBar() {


  const [ homeButton, setHomeButton ] = useState();
  const [ clothingButton, setClothingButton ] = useState();
  const [ webDevButton, setWebDevButton ] = useState();
  const [ contactButton, setContactButton ] = useState();
  const [ writingButton, setWritingButton ] = useState();
  const [ photographyButton, setPhotographyButton ] = useState();
  

  useEffect(() => {
    const fetchHomeButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/home-sketch.png')
      setHomeButton(data.publicUrl)
    }
    
    const fetchClothingButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/clothing-sketch.png')
      setClothingButton(data.publicUrl)
    }

    const fetchWebDevButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/webdev-sketch.png')
      setWebDevButton(data.publicUrl)
    }

    const fetchContactButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/contact-sketch.png')
      setContactButton(data.publicUrl)
    }

    const fetchWritingButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/writing-sketch.png')
      setWritingButton(data.publicUrl)
    }

    const fetchPhotographyButton = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('words/photography-sketch.png')
      setPhotographyButton(data.publicUrl)
    }

    fetchHomeButton();
    fetchClothingButton();
    fetchWebDevButton();
    fetchContactButton();
    fetchWritingButton();
    fetchPhotographyButton();

  }, [])

 
  return (
 <div className="navBarContainer">

    <NavLink to='/'>{homeButton ? 'home': 'loading'}</NavLink>
    <NavLink to='/clothing'>{clothingButton ? 'clothing' : 'loading'}</NavLink>
    <NavLink to='/photography'> {'photography'} </NavLink>
    <NavLink to='/contact'>{contactButton ? 'contact': 'loading'}</NavLink>

 </div>
  )
}
