import React from "react";
import Image from "next/image";
import Titre from "../Titre";

const Parties = [
  {
    titre: "Le déclic",
    histoire:
      "Monsieur Jeannot KASHALA, en vacances dans sa terre natale, la République Démocratique du Congo, fut profondément bouleversé. Il fut témoin, dans les rues de Kinshasa, du désarroi de nombreux enfants vivant avec des handicaps physiques et mentaux, souvent réduits à la mendicité pour survivre.",
    image: "/Histoire/Declic.jpg",
  },
  {
    titre: "La décision",
    histoire:
      "De retour au Canada, il partagea avec son épouse, Madame Laura, les images poignantes de ces enfants en détresse. Ensemble, ils prirent une décision audacieuse : créer une structure qui offrirait un avenir à ces enfants souvent oubliés, un espace de soins, d’apprentissage et de dignité.",
    image: "https://img.freepik.com/vecteurs-premium/concepts-conversation-interessants-illustres-par-images-vives_1263357-35198.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    titre : 'La naissance de SEED',
    histoire :'C’est ainsi que fut fondée l’organisation sans But Lucratif (O.B.L) Sauvons l’Enfance en Difficulté (SEED), le 25 janvier 2020 en République Démocratique du Congo et le 4 janvier 2021 au Canada. Avec un objectif clair : venir en aide aux enfants vulnérables, particulièrement ceux atteints d’anomalies ou en situation de handicap.',
    image : 'https://img.freepik.com/free-vector/hand-drawn-starting-line-business-illustration_23-2149540609.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    titre :'Mission Humanitaire',
    histoire : 'Dès ses débuts, Sauvons l’Enfance en Difficulté (SEED) a démontré un engagement sans faille. En 2019, face à la pandémie de COVID-19, l’Organisme sans But Lucratif (O.B.L) s’est illustrée en apportant un soutien essentiel : distribution de masques, de désinfectants et de vivres alimentaires à ceux qui en avaient le plus besoin, en l’occurrence les enfants en situation difficiles ou handicapés.',
    image: "https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-coronavirus_23-2148508426.jpg?t=st=1732901865~exp=1732905465~hmac=75d4712803f6f8772964fdbc631fa8fb388e8dce1128ad7f5135e2393b42b97d"
  },
  {
    titre :'Des actions multiples',
    histoire:'SEED n’est pas qu’une organisation caritative, c’est aussi une plateforme éducative, préventive et thérapeutique : Elle développe des chaînes YouTube telles que : ONG SEED TV, SEED TV Cinéma, 3 Savoirs TV et CVA TV, pour sensibiliser, divertir et éduquer. Elle met en place des programmes de soutien individualisé, avec une équipe composée de 20 intervenants, 10 bénévoles et 7 professionnels de la presse.',
    image :'https://img.freepik.com/free-vector/corporate-meeting-employees-cartoon-characters-discussing-business-strategy-planning-further-actions-brainstorming-formal-communication-seminar-concept-illustration_335657-2035.jpg'
  },
  {
    titre :'Un espoir pour les enfants en difficulté',
    histoire:"À ce jour, les actions de SEED bénéficient à un nombre de 200 enfants dans la ville province de Kinshasa, plus de 100 enfants sont pris en charge dans la ville de Matadi et une dizaine d’Enfants au Canada. Ces chiffres traduisent une croissance constante et un engagement tangible de SEED et ses différents acteurs en charge des enfants. Avec une ambition renouvelée, SEED projette d’ici trois ans d'étendre ses activités dans plusieurs régions : Lubumbashi, Mbuji-Mayi, Bandundu et l’Est du pays. L’objectif est de Toucher 1 000 enfants dans le besoin.",
    image :'https://img.freepik.com/premium-vector/poses-expressions-funny-boy_29937-6329.jpg?semt=ais_hybrid&w=740'
  }
  ,
  {
    titre :'Un appel à l\'action',
    histoire:'L’Organisme sans But Lucratif Sauvons l’Enfance en Difficulté (SEED) invite chacun à rejoindre cette aventure humaine. Car ensemble, nous pouvons faire de l’espoir une réalité durable pour tous ces enfants en difficulté.',
    image :'https://img.freepik.com/premium-vector/speech-bubble-with-call-action-text-speech-bubble-with-loudspeaker-pop-art-style-vector-line-icon-business-advertising_748571-785.jpg'
  }
];

const Histoire = () => {
  return (
    <section className="w-full HISTOIRE">
      <div className="w-full text-center">
        <Titre Titre1="Notre" Titre2="Histoire" />
      </div>

      {Parties.map((partie, index) => (
        <div
          key={index}
          className={`HISTOIRE_Bis w-full h-[calc(var(--vh, 1vh)_*_100)] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 md:py-20 gap-8 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          {/* Texte */}
          <div
            className={`w-full md:w-1/2 text-left ${
              index % 2 === 0 ? "order-1" : "order-2 md:order-1"
            }`}
          >
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-800 mb-6 md:mb-8">
              {partie.titre}
            </h2>
            <p className="text-justify hyphens-auto text-lg md:text-xl xl:text-2xl text-gray-600 leading-relaxed">
              {partie.histoire}
            </p>
          </div>

          {/* Image */}
          <div
            className= "w-full md:w-1/2 flex justify-center order-2 md:order-2"
        
          >
            <Image
              src={partie.image}
              alt={partie.titre}
              width={500}
              height={400}
              className="rounded-2xl object-cover shadow-xl IMAGE"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Histoire;
