import React from 'react';

const Titre = ({ Titre1, Titre2 }) => {
  return (
    <div className="flex items-baseline justify-center gap-2 my-6 md:my-10 uppercase">
      <h1 className="text-3xl smtext-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">{Titre1} <span className="text-3xl smtext-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-500 font-extrabold">{Titre2}</span></h1>
    </div>
  );
};

export default Titre;
