
import './HomePage.css'
import NavBar from "../../components/NavBar/NavBar"
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase';

export default function HomePage() {

  const [ image, setImage ] = useState();
  const [ imageTwo, setImageTwo ] = useState();
  const [ eagleStickTwo, setEagleStickTwo ] = useState();
  const [ distantEagle, setDistantEagle] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const fetchImage = async (imageUrl) => {
      try {
        const { data, error } = await supabase.storage.from('images').getPublicUrl(imageUrl);
        if (error) throw error; 
  
        switch (imageUrl) {
          case 'eagle-photos/eagle.jpg':
            setImage(data.publicUrl);
            break;
          case 'eagle-photos/eagle-stick.jpg':
            setImageTwo(data.publicUrl);
            break;
          case 'eagle-photos/eagle-stick-2.JPG':
            setEagleStickTwo(data.publicUrl);
            break;
          case 'eagle-photos/distant-eagle.JPG':
            setDistantEagle(data.publicUrl);
            break;
          default:
            console.error(`Unexpected image URL: ${imageUrl}`);
        }
      } catch (error) {
        console.error(`Error fetching image from ${imageUrl}:`, error);
       
      }
    };
  
    fetchImage('eagle-photos/eagle.jpg');
    fetchImage('eagle-photos/eagle-stick.jpg');
    fetchImage('eagle-photos/eagle-stick-2.JPG');
    fetchImage('eagle-photos/distant-eagle.JPG');
    fetchImage('landscape/tireTracks.JPG');
  
  }, []);

    const images = [image, imageTwo, eagleStickTwo, distantEagle]


useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((currentIndex + 1) % images.length); 
  }, 7000);

  return () => clearInterval(intervalId);
}, [images]);


  return (
    <div style={{
      display: 'flex',
      backgroundImage: `url(${images[currentIndex]})`,
      backgroundSize: 'cover',
      height: '100vh',
      width: 'auto'
    }} >

        <NavBar />
      
      <div className='orangeBar'>
       Who is that?
        <br />
        <br />
        Well, if i really knew my ears might be hurting pretty good right now.
        I sure do like those big ole monsters though, swoop saavy
        with all their thoughts, all over this town.
       <br />
       <br />
       But a t-shirt sure sounds good right now, or a sweatshirt! Sure don't hurt, 
       keeping my arms in warm places, 
       like keeping your presents nice and special for the holidays.
      </div>

  
    </div>
  )
}
