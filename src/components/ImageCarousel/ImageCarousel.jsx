import { supabase } from '../../services/supabase'
import './ImageCarousel.css'
import { useState, useEffect } from 'react'

export default function ImageCarousel() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase.storage.from('images').list();
        console.log(data)
        if (error) {
          console.error('Error fetching images:', error);
        } else {
          const imageUrls = await Promise.all(
            data.map(async (image) => {
              const { data: publicUrlData } = await supabase.storage
                .from('images')
                .getPublicUrl(image.name);
              return publicUrlData.publicUrl;
            })
          );
          setImages(imageUrls);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      {images.length > 0 ? (
        <img
          style={{
            height: 'auto',
            width: '100%',
          }}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}