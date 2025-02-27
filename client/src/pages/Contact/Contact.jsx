
import './Contact.css'
import NavBar from "../../components/NavBar/NavBar";
import { supabase } from '../../services/supabase';
import { useEffect, useState } from 'react';

export default function Contact() {

  const [ portrait, setPortrait ] = useState();

  useEffect(() => {
    const fetchPortrait = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('eagle-photos/eagleStalk.jpg');
      setPortrait(data.publicUrl)
      }
    
      fetchPortrait();

  }, [])



  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#242424',
      backgroundImage:  `url(${portrait})`,
      backgroundSize: 'cover',
      height: '100vh',
      width: 'auto'
    }}>
    
    <NavBar />
        
        <div className="contactContainer">
          <p style={{ width: '90%'}}>
         lukehightower11@gmail.com
          <br />
          <strong>Coupeville, WA</strong>
          </p>
        </div>
    </div>
  )
}
