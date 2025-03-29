
import './Gallery.css';
import { useState, useEffect } from "react"

export default function Gallery(mainPhoto) {

  return (
    <div className="galleryMainContainer"> 
        <div className='mainPhotoGallery'>
            <img className='mainImage' src={mainPhoto.mainPhoto} />

            <div className='downloaderPhotoGallery'>
            choose size of photo to download
            <button>download photo</button>
            </div>

            <div className='thumbnailsPhotoGallery'>
            side scrolling thumbnails of photos
            </div>
        </div>
        {console.log(mainPhoto.mainPhoto)}
    </div>
  )
}
