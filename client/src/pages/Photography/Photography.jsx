
import './Photograpy.css'
import NavBar from "../../components/NavBar/NavBar"
import { supabase } from '../../services/supabase';
import { useState, useEffect } from 'react'

export default function Photography() {

    const [ photoOne, setPhotoOne ] = useState()




  return (
    <div style={{
        width: '100%',

    }}>
        <NavBar />
        <p style={{ position: 'absolute', left: '50%', top: '30%', fontSize: '38px'}}>
        photography
        </p> 
       
    </div>
  )
}
