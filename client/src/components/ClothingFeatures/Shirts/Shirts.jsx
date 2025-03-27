import { useState, useEffect } from "react"
import { supabase } from "../../../services/supabase"
import Carousel from "../../Carousel/Carousel"


export default function Shirts() {

const [ tieDye , setTieDye ] = useState();
const [ grannyShirt, setGrannyShirt ] = useState();
const [ ladyShirt, setLadyShirt ] = useState();
const [ dogShirt, setDogShirt ] = useState();
const [loadingTime, setLoadingTime] = useState(null);


useEffect(() => {
  const startTime = performance.now(); 


  const fetchImages = async () => {

    const images = [
      {path:  'clothes/tieDyeShirt.jpeg', setPath: setTieDye},
      {path: 'clothes/grannyShirt.jpeg', setPath: setGrannyShirt},
      {path: 'clothes/ladyShirt.jpeg', setPath: setLadyShirt},
      {path: 'clothes/dogShirt.jpeg', setPath: setDogShirt}
    ]
  
    const fetchImageBank = images.map(async (image) => {
  
      const { data, error } = await supabase.storage.from('images').getPublicUrl(image.path)
      if (data) {
        image.setPath(data.publicUrl)
      } else {
        console.log('error fetching images', error)
      }
      const endTime = performance.now(); // End timing
      setLoadingTime(endTime - startTime);
    });
    
  await Promise.all(fetchImageBank)

  }

  fetchImages()
  }, [])


 

  return (
    <div className="blueArrow">
       {loadingTime !== null && (
        <p>Image loading time: {loadingTime.toFixed(2)} milliseconds</p>
      )}
      <Carousel
        firstItem={'shirts'}

        photoZero={tieDye}
        photoOne={grannyShirt}
        photoTwo={ladyShirt}
        photoThree={dogShirt}
      />
    </div>
  )
}
