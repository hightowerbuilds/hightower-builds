import './Photograpy.css'
import NavBar from "../../components/NavBar/NavBar"
import { supabase } from '../../services/supabase';
import { useState, useEffect } from 'react'
import Gallery from '../../components/Gallery/Gallery';
import DonationModal from '../../components/DonationModal/DonationModal';

export default function Photography() {
    const [photoOne, setPhotoOne] = useState()
    const [ navState, setNavState ] = useState(true)

    const changeNavState = () => {
        if (navState === true) {
            setNavState(false)
        } else if (navState === false) {
            setNavState(true)
        }
    }

    useEffect(() => {
        const fetchPhoto = async () => {
            const {data} = supabase.storage
            .from('images')
            .getPublicUrl('eagle-photos/distant-eagle.JPG')
            setPhotoOne(data.publicUrl)
        }
        
        fetchPhoto();
    }, [])

    return (
        <div className="photography-page">
            {navState ? <button onClick={changeNavState}>NAV</button> :  <><NavBar /><button onClick={changeNavState}>look</button> </>}
            <div className='navDiv'></div>
           
            <div className="gallery-container">
                <Gallery mainPhoto={photoOne} />
            </div>
          
        </div>
    )
}
