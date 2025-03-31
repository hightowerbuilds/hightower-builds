import './Photograpy.css'
import NavBar from "../../components/NavBar/NavBar"
import { supabase } from '../../services/supabase';
import { useState, useEffect } from 'react'
import Gallery from '../../components/Gallery/Gallery';
import DonationModal from '../../components/DonationModal/DonationModal';

export default function Photography() {
    const [photoOne, setPhotoOne] = useState()

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
            <NavBar />
            <div className="gallery-container">
                <Gallery mainPhoto={photoOne} />
            </div>
            <div className="donation-container">
                <DonationModal />
            </div>
        </div>
    )
}
