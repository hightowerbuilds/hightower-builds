import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { supabase } from '../../../services/supabase';
import Carousel from '../../Carousel/Carousel';

const PerformanceMetrics = ({ loadingTime, dataSize }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsVisible(!isVisible)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#c46b6b',
          color: 'white',
          border: 'none',
          borderRadius: '5%',
          width: '150px',
          height: '40px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isVisible ? '×' : 'performance'}
      </button>
      
      {isVisible && (
        <div className="performance-metrics" style={{ 
          position: 'fixed', 
          bottom: '70px', 
          right: '20px', 
          background: 'rgba(0, 0, 0, 0.8)', 
          color: 'white', 
          padding: '10px', 
          borderRadius: '5px',
          fontSize: '14px',
          zIndex: 1000,
          fontFamily: 'Courier, monospace',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'opacity 0.2s',
          opacity: 1
        }}>
          <div>Loading Time: {loadingTime?.toFixed(2)}ms</div>
          <div>Data Size: {(dataSize / 1024).toFixed(2)} KB</div>
        </div>
      )}
    </div>
  );
};

PerformanceMetrics.propTypes = {
  loadingTime: PropTypes.number,
  dataSize: PropTypes.number
};

PerformanceMetrics.defaultProps = {
  loadingTime: null,
  dataSize: 0
};

export default function Pants() {
  const [imageUrls, setImageUrls] = useState({});
  const [loadingTime, setLoadingTime] = useState(null);
  const [dataSize, setDataSize] = useState(0);

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

      let totalDataSize = 0;
      const fetchImagePromises = Object.entries(imagePaths).map(
        async ([key, path]) => {
          const { data, error } = await supabase.storage
            .from('images')
            .getPublicUrl(path);

          if (data) {
            // Fetch the actual image to measure its size
            const response = await fetch(data.publicUrl);
            const blob = await response.blob();
            totalDataSize += blob.size;
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
      setDataSize(totalDataSize);

      const endTime = performance.now(); 
      setLoadingTime(endTime - startTime); 
    };

    fetchImages();
  }, []);

  return (
    <div className="blueArrow">
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
      <PerformanceMetrics loadingTime={loadingTime} dataSize={dataSize} />
    </div>
  );
}