import React from "react";
import Titre from "../Titre";
import Image from "next/image";

const Service = [
  {
    Titre: "Aides éducatives",
    Description:
      "Nous fournissons des services d'aide éducative qui visent à aider un enfant en difficulté atteint d'une anomalie à trouver des solutions aux difficultés qu'il traverse dans le présent, avant d'améliorer sa qualité de vie et son bien-être.",
    Commentaire:
      "Le travail de terrain de l'Organisme sans But Lucratif (O.B.L) Sauvons l'Enfance en Difficulté (SEED) se centre sur « ici et maintenant » en utilisant son approche cognitivo-comportementale.",
    Image: "/Services/education.png",
  },
  {
    Titre: "Aides de soutien",
    Description:
      "Nous offrons des services de soutien ponctuel à 1 enfant en difficulté atteint d'une anomalie pour l'aider à trouver une solution à ses problèmes immédiats ou à se libérer de ses émotions pénibles.",
    Commentaire:
      "Notre approche vise à apporter un soutien personnalisé et bienveillant, en mettant l'accent sur le bien-être émotionnel et mental de l'enfant.",
    Image: "/Services/soutien.png",
  },
  {
    Titre: "Santé mentale",
    Description:
      "En partenariat avec ses psychologues, psychiatres, travailleurs, médecins et éducateurs, l'Organisation sans But Lucratif (SEED) vise à apporter des changements dans la personnalité de l'enfant atteint d'une anomalie par la création d'un lien de confiance afin qu'il ait la compréhension et la conscience de sa personnalité.",
    Image: "/Services/brain.png",
  },
  {
    Titre: "Aide aux ainés",
    Description:
      "L'Organisme à But non Lucratif (O.B.L) Sauvons l'Enfance en Difficulté (SEED) offre des services et programmes d'aide aux personnes âgées en leur offrant des services d'appui à domicile, en les aidant à se déplacer et en organisant des activités de relaxation ou d'animation pour leur bien-être et santé.",
    Image: "/Services/adulte.png",
  },
];

const Services = () => {
  return (
    <>
      <div className="w-full h-[calc(var(--vh, 1vh)_*_100)] flex flex-col items-center justify-between bg-gray-50 py-8 lg:py-16">
        <div className="w-full text-center mb-6 md:mb-10">
          <Titre Titre1={"Nos"} Titre2={"Services"} />
        </div>

        <div className=" grid gap-4 px-4 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 items-center justify-between w-full max-w-[96%]">
          {Service.map((EachServ, index) => (
            <div
              className="bg-white cursor-pointer hover:bg-gray-900 text-black hover:text-white relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transition-300 p-8"
              key={index}
            >
              <div className=" justify-items-end m-auto">
                <Image
                  src={EachServ.Image}
                  width={60}
                  height={60}
                  className="animate-floating SERVICE_IMG"
                  alt={EachServ.Titre}
                />
              </div>

              <div className="py-4">
                <h2 className="text-center uppercase text-2xl md:text-3xl font-extrabold transition-all duration-300 mb-6">
                  {EachServ.Titre}
                </h2>
                <p className="text-lg text-justify hyphens-auto">{EachServ.Description}</p>
              </div>
              <div>
                {EachServ.Commentaire ? (
                  <p className="text-center">[ {EachServ.Commentaire} ]</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
