import React, { useEffect, useState } from 'react'
import Navbar from './navbar';

const Header = () => {
    const [imageIndex, setImageIndex] = useState((0));

    const images = [
        'https://cache.magicmaman.com/data/photo/w1000_ci/5y/detester-jouer-avec-enfant.webp',
        'https://cache.magicmaman.com/data/photo/w1000_ci/1ju/poupee-enfant-developpement-empathie.webp',
        'https://www.elle.be/fr/wp-content/uploads/2014/05/kids-1-1-1507x1000.jpg.webp',
        'https://sf1.psychologies.com/wp-content/uploads/psycho/2012/03/Il-s-amuse-a-des-jeux-de-filles-2.png'
      ];

      useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3000 ms = 3 secondes
    
        // Nettoyer l'intervalle à la fin
        return () => clearInterval(intervalId);
      }, [images.length]);

      const headerStyle = {
        width: '100%',
        height: '200px', // Exemple de hauteur pour le header
        backgroundSize: 'cover',
        marginTop : '5rem',
        backgroundPosition: 'center',
        backgroundImage: `url(${images[imageIndex]})`, // Image dynamique
        transition: 'background-image 1s ease-in-out' // Transition pour l'effet smooth
      };

      const content = {
        display : 'flex'
      };

    return (
        <div content style={content}>
            <Navbar/>
            <div className="a-header" style={headerStyle}>
            </div>
        </div>
    )
}

export default Header