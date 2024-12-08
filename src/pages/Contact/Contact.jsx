
import './Contact.css'
import NavBar from "../../components/NavBar/NavBar";
import { supabase } from '../../services/supabase';
import { useEffect, useState } from 'react';

export default function Contact() {

  const [ portrait, setPortrait ] = useState();

  useEffect(() => {
    const fetchPortrait = async () => {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('webdev/ceilingLight.JPG');
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
          <p>
          <strong>lukehightower11@gmail.com</strong>
          <br />
          <strong>Coupeville, WA</strong>
          </p>
        </div>
    </div>
  )
}
