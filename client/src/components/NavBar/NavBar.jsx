import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';

export default function NavBar() {
  const [navBarImages, setNavBarImages ] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNavImages = async () => {
      try {
        const imagePaths = [
          { path: '/', image: 'words/homePageSketch.png' },
          { path: '/store', image: 'words/clothingSketch.png' },
          { path: '/photography', image: 'words/photography-sketch.png' },
          { path: '/contact', image: 'words/contactSketch.png' },
        ];

        const images = imagePaths.map(async (item) => {
          const { data } = await supabase.storage.from('images').getPublicUrl(item.image);
          return { ...item, imageUrl: data.publicUrl };
        });

        const resolvedImages = await Promise.all(images);
        setNavBarImages(resolvedImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchNavImages();
  }, []);

  if (loading) {
    return <div>Loading navigation...</div>;
  }

  return (
    <div className="navBarContainer">
      {navBarImages.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.imageUrl ? (
            <img className="navBarButtons" src={item.imageUrl} alt="" />
          ) : (
            'Image not available'
          )}
        </NavLink>
      ))}
    </div>
  );
}