import { useState, useEffect } from "react"
import { supabase } from "../../../services/supabase"
import Carousel from "../../Carousel/Carousel"


export default function Shirts() {

const [ tieDye , setTieDye ] = useState();
const [ grannyShirt, setGrannyShirt ] = useState();
const [ ladyShirt, setLadyShirt ] = useState();
const [ dogShirt, setDogShirt ] = useState();

useEffect(() => {

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
    });
    
  await Promise.all(fetchImageBank)

  }

  fetchImages()
  }, [])


 

  return (
    <div className="blueArrow">

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
