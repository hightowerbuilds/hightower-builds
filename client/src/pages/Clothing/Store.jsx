import './Clothing.css';
import { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import NavBar from '../../components/NavBar/NavBar';
import Pants from '../../components/ClothingFeatures/Pants/Pants';
import Shirts from '../../components/ClothingFeatures/Shirts/Shirts';
import Sweatshirts from '../../components/ClothingFeatures/Sweatshirts/Sweatshirts';
import Bags from '../../components/ClothingFeatures/Bags/Bags';

export default function Store() {
  const [clothingFeature, setClothingFeature] = useState(null);
  const [images, setImages] = useState({
    sweatShirt: null,
    shirt: null,
    bag: null,
    pant: null,
  });

  const components = {
    pants: <Pants />,
    shirts: <Shirts />,
    sweatshirts: <Sweatshirts />,
    bags: <Bags />,
  };

  useEffect(() => {
    const fetchImages = async () => {
      const imageTypes = ['sweatshirt', 'shirts', 'bags', 'pants'];
      const fetchedImages = {};

      for (const type of imageTypes) {
        const { data } = await supabase.storage
          .from('images')
          .getPublicUrl(`words/${type}Sketch.png`);
        fetchedImages[`${type}`] = data.publicUrl;
      }

      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  const handleFeatureClick = (feature) => {
    setClothingFeature(components[feature]);
  };

  return (
    <div>
      <NavBar />
      <div className="mainClothingContainer">
        <div className="clothingItemsContainer">
          <div onClick={() => handleFeatureClick('sweatshirts')}>
            <img src={images.sweatshirt} className="clothingFeatureImage" alt="Sweatshirts" />
          </div>
          <div onClick={() => handleFeatureClick('shirts')}>
            <img src={images.shirts} className="clothingFeatureImage" alt="Shirts" />
          </div>
          <div onClick={() => handleFeatureClick('bags')}>
            <img src={images.bags} className="clothingFeatureImage" alt="Bags" />
          </div>
          <div onClick={() => handleFeatureClick('pants')}>
            <img src={images.pants} className="clothingFeatureImage" alt="Pants" />
          </div>
        </div>
        {clothingFeature}
      </div>
    </div>
  );
}