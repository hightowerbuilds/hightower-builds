
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
      backgroundImage:  `url(${portrait})`,
      backgroundSize: 'cover',
      height: '120vh',
      width: '100%'
    }}>
    
    <NavBar />
        
        <div className="contactContainer">
          <p style={{ width: '50%'}}>
         lukehightower11@gmail.com
          <br />
          <strong>Coupeville, WA</strong>
          </p>
        </div>
    </div>
  )
}
