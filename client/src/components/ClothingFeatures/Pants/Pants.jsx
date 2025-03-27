import { useState, useEffect } from 'react';
import { supabase } from '../../../services/supabase';
import Carousel from '../../Carousel/Carousel';

export default function Pants() {
  const [imageUrls, setImageUrls] = useState({});
  const [loadingTime, setLoadingTime] = useState(null);

  useEffect(() => {
    const startTime = performance.now(); 

    const fetchImages = async () => {
      const imagePaths = {
        eagleStalk: 'eagle-photos/eagleStalk.jpg',
        distantEagle: 'eagle-photos/distant-eagle.JPG',
        eagleCloseUp: 'eagle-photos/eagle-closeup-2.JPG',
        eagleStick: 'eagle-photos/eagle-stick-2.JPG',
        beautifulUgly: 'landscape/beautifulUgly.JPG',
        fernsUnfurl: 'landscape/fernsUnfurl.JPG',
        forestLongView: 'landscape/forestLongView.JPG',
        weirdDeer: 'landscape/weirdDeer.JPG',
        tireTracks: 'landscape/tireTracks.JPG',
        mossForest: 'landscape/moss-forest.jpg',
        greenGrass: 'landscape/greenGrass.JPG',
        grassWithSeed: 'landscape/grassWithSeed.JPG',
        grass: 'landscape/grass.JPG',
        aloePlant: 'webdev/aloePlant.JPG',
        blueSky: 'webdev/blueSky.JPG',
        ceilingLight: 'webdev/ceilingLight.JPG',
      };

      const fetchImagePromises = Object.entries(imagePaths).map(
        async ([key, path]) => {
          const { data, error } = await supabase.storage
            .from('images')
            .getPublicUrl(path);

          if (data) {
            return { [key]: data.publicUrl };
          } else {
            console.error(`Error fetching image ${path}:`, error);
            return { [key]: null }; 
          }
        }
      );

      const results = await Promise.all(fetchImagePromises);
      const imageUrlsObject = results.reduce((acc, current) => ({ ...acc, ...current }), {});
      setImageUrls(imageUrlsObject);

      const endTime = performance.now(); 
      setLoadingTime(endTime - startTime); 
    };

    fetchImages();
  }, []);

  return (
    <div className="blueArrow">
      {loadingTime !== null && (
        <p>Image loading time: {loadingTime.toFixed(2)} milliseconds</p>
      )}
      <Carousel
        firstItem={'eagles'}
        secondItem={'nature one'}
        thirdItem={'nature two'}
        fourthItem={'nature three'}
        photoZero={imageUrls.eagleStalk}
        photoOne={imageUrls.distantEagle}
        photoTwo={imageUrls.eagleCloseUp}
        photoThree={imageUrls.eagleStick}
        photoZeroA={imageUrls.beautifulUgly}
        photoOneA={imageUrls.fernsUnfurl}
        photoTwoA={imageUrls.forestLongView}
        photoThreeA={imageUrls.weirdDeer}
        photoZeroB={imageUrls.tireTracks}
        photoOneB={imageUrls.mossForest}
        photoTwoB={imageUrls.greenGrass}
        photoThreeB={imageUrls.grassWithSeed}
        photoZeroC={imageUrls.grass}
        photoOneC={imageUrls.aloePlant}
        photoTwoC={imageUrls.blueSky}
        photoThreeC={imageUrls.ceilingLight}
      />
    </div>
  );
}