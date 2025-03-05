
import './Photograpy.css'
import NavBar from "../../components/NavBar/NavBar"
import { supabase } from '../../services/supabase';
import { useState, useEffect } from 'react'

export default function Photography() {

    const [ photoOne, setPhotoOne ] = useState()

    useEffect(() => {
        async function fetchImages() {
                const { data, error } = await supabase.storage.from('images').getPublicUrl('eagle-photos/eagleStalk.jpg');
                setPhotoOne(data.publicUrl)
          }
      
          fetchImages();
    }, [])

    const showImages = () => {
        return (
           <img style={{height: '700px'}} src={`${photoOne}`} />
        )
    }



  return (
    <div style={{
        width: '100%',

    }}>
        <NavBar />
        Photography

        <div className="mainContentPhotography">
            {showImages()}
        </div>
    </div>
  )
}
