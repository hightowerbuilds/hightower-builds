
import './Gallery.css';
import { useState, useEffect } from "react"

export default function Gallery() {


const [ photoAlbum, setPhotoAlbum ] = useState([]);



  return (
    <div className="galleryMainContainer"> 
    <div className='mainPhotoGallery'>
        main photo
    </div>
 
    <div>
        choose size of photo to download
    <br />
        <button>
        download photo
        </button>
    </div>

        <div>
            side scrolling thumbnails of photos
        </div>
    </div>
  )
}
