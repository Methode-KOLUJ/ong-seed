import React from "react";
import Titre from "../Titre";
import Image from "next/image";


const JeCentre = 'text-center'


const About = () => {
  return (
    <div id="About" className="w-full h-[calc(var(--vh, 1vh)_*_100)] flex flex-col items-center justify-between gap-6 px-4 py-8 bg-gray-50 text-black">
      <div className="w-full text-center">
        <Titre Titre1="à" Titre2="propos" />
      </div>

      {/* Image placée au-dessus sur mobile, à droite sur desktop */}
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8 w-full max-w-[96%] IMAGE">

        {/* Texte */}
        <div className="w-full lg:w-1/2 space-y-6 text-justify hyphens-auto max-h-[80vh] overflow-y-auto px-2 leading-relaxed text-lg sm:text-xl md:text-2xl py-6">
          <p>
            Sauvons l'Enfance en Difficulté (SEED) est un organisme sans but lucratif (O.B.L)
            qui prend en charge 5 types d'enfants en difficulté : ceux atteints
            d'une anomalie de comportement, de communication, d'ordre
            intellectuel, d'ordre physique ou d'anomalie multiple. L'organisme
            offre son aide de soutien, aide éducative et aide thérapeutique aux
            enfants en difficulté âgés de 0 à 21 ans.{" "}
          </p>
          <p>
            Notre objectif est d'offrir aux enfants en difficulté un état de
            bien-être en satisfaisant leurs besoins essentiels afin qu'ils
            puissent mener une vie de qualité et trouver la sérénité et nous
            utilisons une succession de procédés pour mener nos actions :
            identifier un enfant en difficulté atteint d'une anomalie, procéder
            à la documentation, et finalement résoudre ses besoins essentiels
            pour atteindre nos 5 grands résultats.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.trplane.com/wp-content/uploads/133-1337353_work-with-us-work-with-us-illustration-hd.png"
            alt="About us"
            width={800}
            height={300}
            className="w-[600px] h-[500px] rounded-lg shadow-md object-cover MISSION_IMG"
          />
        </div>
      </div>
    </div>
  );
};


export default About;

// http://localhost:3000