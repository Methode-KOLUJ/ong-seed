// Partenaires.jsx

'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PARTNERS = [
  { id: 1, name : 'KOLUJ_DEV', logo: '/Partenaires/koluj.png' },
  { id: 2, name : 'Google Adsense', logo: '/Partenaires/adsense.png' },
];

export default function Partenaires() {
  const sliderRef = useRef(null);
  const duplicatedPartners = PARTNERS;

  useEffect(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  const containerWidth = slider.parentElement.clientWidth; // largeur visible
  const totalWidth = slider.scrollWidth / 2; // largeur d'un jeu de partenaires

  let animationFrameId;
  let position = containerWidth; // start from right outside the visible container
  const speed = 1.5;

  const animate = () => {
    position -= speed;
    if (position <= -totalWidth) {
      position = containerWidth; 
    }
    slider.style.transform = `translateX(${position}px)`;
    animationFrameId = requestAnimationFrame(animate);
  };

  animationFrameId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}, []);


  return (
    <div className="bg-white py-3 overflow-hidden">
      <div className="relative w-full h-24">
        {/* Masque gradient pour estomper les bords */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        
        {/* Bande déroulante */}
        <div className="flex items-center h-full w-full">
          <motion.div
            ref={sliderRef}
            className="flex items-center gap-12 px-3"
            initial={{ x: 0 }}
          >
            {duplicatedPartners.map((partner) => (
  <div
    key={`${partner.id}-${Math.random().toString(36).substring(2, 9)}`}
    className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105 group"
  >
    <Image
      src={partner.logo}
      alt={partner.name}
      width={120}
      height={66}
      className="object-contain h-20 w-auto max-h-20 shadow-xs rounded-md transition-all transition-300"
      title={partner.name}
    />
    <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{partner.name}</p>
  </div>
))}

          </motion.div>
        </div>
      </div>
    </div>
  );
}


// Utiliser seulement marquee sans CSR pour profiter du SSR afin d'optimiser Adsense & SEO