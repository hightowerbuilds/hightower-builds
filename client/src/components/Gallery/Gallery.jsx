import './Gallery.css';
import { useState, useEffect, useRef } from "react"
import PropTypes from 'prop-types';
import { supabase } from '../../services/supabase';
import PerformanceMetrics from '../PerformanceMetrics/PerformanceMetrics';


export default function Gallery({ mainPhoto }) {
  const [selectedSize, setSelectedSize] = useState('original');
  const [isDownloading, setIsDownloading] = useState(false);
  const [thumbnails, setThumbnails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingTime, setLoadingTime] = useState(null);
  const [dataSize, setDataSize] = useState(0);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    const startTime = performance.now();
    let totalDataSize = 0;

    const fetchThumbnails = async () => {
      const imagePaths = [
        'eagle-photos/eagleStalk.jpg',
        'eagle-photos/distant-eagle.JPG',
        'eagle-photos/eagle-closeup-2.JPG',
        'eagle-photos/eagle-stick-2.JPG',
        'landscape/beautifulUgly.JPG',
        'landscape/fernsUnfurl.JPG',
        'landscape/forestLongView.JPG',
        'landscape/weirdDeer.JPG',
        'landscape/tireTracks.JPG',
        'landscape/moss-forest.jpg',
        'landscape/greenGrass.JPG',
        'landscape/grassWithSeed.JPG',
        'landscape/grass.JPG',
        'webdev/aloePlant.JPG',
        'webdev/blueSky.JPG',
        'webdev/ceilingLight.JPG',
      ];

      const thumbnailPromises = imagePaths.map(async (path) => {
        const { data } = await supabase.storage
          .from('images')
          .getPublicUrl(path);
        
        const response = await fetch(data.publicUrl);
        const blob = await response.blob();
        totalDataSize += blob.size;
        
        return data.publicUrl;
      });

      const urls = await Promise.all(thumbnailPromises);
      setThumbnails(urls);
      setDataSize(totalDataSize);

      const endTime = performance.now();
      setLoadingTime(endTime - startTime);
    };

    fetchThumbnails();
  }, []);

  const handleDownload = async () => {
    if (!thumbnails[currentIndex]) return;
    
    setIsDownloading(true);
    try {
      const response = await fetch(thumbnails[currentIndex]);
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      const filename = thumbnails[currentIndex].split('/').pop();
      link.download = `download-${filename}`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const scrollThumbnails = (direction) => {
    if (thumbnailsRef.current) {
      const scrollAmount = 200;
      thumbnailsRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  

  return (
    <div className="galleryMainContainer"> 
      <div className='mainPhotoGallery'>
        <img 
          className='mainImage' 
          src={thumbnails[currentIndex] || mainPhoto} 
          alt="Gallery main photo" 
        />

        <div className='downloaderPhotoGallery'>
          <div className="download-controls">
            <select 
              value={selectedSize} 
              onChange={(e) => setSelectedSize(e.target.value)}
              className="size-select"
            >
              <option value="original">Original Size</option>
              <option value="large">Large (1920px)</option>
              <option value="medium">Medium (1280px)</option>
              <option value="small">Small (800px)</option>
            </select>
            
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="download-button"
            >
              {isDownloading ? 'Downloading...' : 'Download Photo'}
            </button>
          </div>
        </div>

        <div className='thumbnailsPhotoGallery'>
          <button 
            className="scroll-button left"
            onClick={() => scrollThumbnails(-1)}
          >
            ‹
          </button>
          <div className="thumbnails-container" ref={thumbnailsRef}>
            {thumbnails.map((thumbnail, index) => (
              <div 
                key={index}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={thumbnail} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          <button 
            className="scroll-button right"
            onClick={() => scrollThumbnails(1)}
          >
            ›
          </button>
        </div>
      </div>
      <PerformanceMetrics loadingTime={loadingTime} dataSize={dataSize} />

    </div>
  );
}

Gallery.propTypes = {
  mainPhoto: PropTypes.string
};

Gallery.defaultProps = {
  mainPhoto: ''
};
