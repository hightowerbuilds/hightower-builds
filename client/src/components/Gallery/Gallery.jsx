
import './Gallery.css';
import { useState, useEffect } from "react"

export default function Gallery() {


const [ photoAlbum, setPhotoAlbum ] = useState([]);



  return (
    <div className="galleryMainContainer"> 
        <div className='mainPhotoGallery'>
            main photo

            <div className='downloaderPhotoGallery'>
            choose size of photo to download
            <button>download photo</button>
            </div>

            <div className='thumbnailsPhotoGallery'>
            side scrolling thumbnails of photos
            </div>
        </div>
    </div>
  )
}
