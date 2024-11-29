
import './NavBar.css'
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from '../../services/supabase';

export default function NavBar() {


  const [ image, setImage ] = useState();


  useEffect(() => {
    const { data } = supabase.storage
  }, [])






  return (
 <div className="navBarContainer">
  <img src="" alt="" />
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/clothing'>Clothing</NavLink>
    <NavLink to='/webdev'>Web Development</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
   
 </div>
  )
}
