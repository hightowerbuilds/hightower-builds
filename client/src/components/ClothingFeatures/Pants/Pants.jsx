import { useState, useEffect } from 'react'
import { supabase } from '../../../services/supabase';
import Carousel from '../../Carousel/Carousel';

export default function Pants() {

  const [ eagleStalk, setEagleStalk ] = useState();
  const [ distantEagle, setDistantEagle ] = useState();
  const [ eagleCloseUp, setEagleCloseUp ] = useState();
  const [ eagleStick, setEagleStick ] = useState();
  const [ beautifulUgly, setBeautifulUgly ] = useState();
  const [ fernsUnfurl, setFernsUnfurl ] = useState();
  const [ forestLongView, setForestLongView ] = useState();
  const [ weirdDeer, setWeirdDeer ] = useState();
  const [ tireTracks, setTireTracks ] = useState();
  const [ mossForest, setMossForest ] = useState();
  const [ greenGrass, setGreenGrass ] = useState();
  const [ grassWithSeed, setGrassWithSeed ] = useState();
  const [ grass, setGrass ] = useState();
  const [ aloePlant, setAloePlant ] = useState();
  const [ blueSky, setBlueSky ] = useState();
  const [ ceilingLight, setCeilingLight ] = useState();

  
  useEffect(() => {
  
   const fetchImages = async () => {
  
    const images = [
      {path: 'eagle-photos/eagleStalk.jpg', setPath: setEagleStalk},
      {path: 'eagle-photos/distant-eagle.JPG', setPath: setDistantEagle },
      {path: 'eagle-photos/eagle-closeup-2.JPG', setPath: setEagleCloseUp },
      {path: 'eagle-photos/eagle-stick-2.JPG', setPath: setEagleStick },
      {path: 'landscape/beautifulUgly.JPG', setPath: setBeautifulUgly},
      {path: 'landscape/fernsUnfurl.JPG', setPath: setFernsUnfurl},
      {path: 'landscape/forestLongView.JPG', setPath: setForestLongView},
      {path: 'landscape/weirdDeer.JPG', setPath: setWeirdDeer},
      {path: 'landscape/tireTracks.JPG', setPath: setTireTracks},
      {path: 'landscape/moss-forest.jpg', setPath: setMossForest},
      {path: 'landscape/greenGrass.JPG', setPath: setGreenGrass},
      {path: 'landscape/grassWithSeed.JPG', setPath: setGrassWithSeed},
      {path: 'landscape/grass.JPG', setPath: setGrass},
      {path: 'webdev/aloePlant.JPG', setPath: setAloePlant},
      {path: 'webdev/blueSky.JPG', setPath: setBlueSky},
      {path: 'webdev/ceilingLight.JPG', setPath: setCeilingLight}
    ]
    
    const fetchImageBank = images.map(async (image) => {
    
      const { data, error } = await supabase.storage.from('images').getPublicUrl(image.path)
      if (data) { 
        image.setPath(data.publicUrl)
      } else {
        console.log('error fetching images', error)
      } 
    });
    
    await Promise.all(fetchImageBank)
    
   } 
    fetchImages();
  }, [])




  return (
    <div className='blueArrow'>
      <Carousel 
        photoZero={eagleStalk}
        photoOne={distantEagle}
        photoTwo={eagleCloseUp}
        photoThree={eagleStick}
        photoZeroA={beautifulUgly} 
        photoOneA={fernsUnfurl}
        photoTwoA={forestLongView}
        photoThreeA={weirdDeer}
        photoZeroB={tireTracks}
        photoOneB={mossForest}
        photoTwoB={greenGrass}
        photoThreeB={grassWithSeed}
        photoZeroC={grass}
        photoOneC={aloePlant}
        photoTwoC={blueSky}
        photoThreeC={ceilingLight}
      />

      
    </div> 
  )
}
