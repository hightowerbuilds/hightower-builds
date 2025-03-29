
import './Photograpy.css'
import NavBar from "../../components/NavBar/NavBar"
import { supabase } from '../../services/supabase';
import { useState, useEffect } from 'react'
import Gallery from '../../components/Gallery/Gallery';

export default function Photography() {

    const [ photoOne, setPhotoOne ] = useState()




  return (
    <div style={{
        width: '100%',

    }}>
        <NavBar />
        <div >
        
        <Gallery />

        </div> 
       
    </div>
  )
}
