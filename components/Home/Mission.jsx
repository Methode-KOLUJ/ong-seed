import React from 'react'
import Titre from '../Titre'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className="w-full h-[calc(var(--vh, 1vh)_*_100)] flex flex-col items-center justify-between gap-6 px-4 py-8 lg:py-16 bg-white text-black">
      
      <div className="w-full text-center">
        <Titre Titre1="Notre" Titre2="Mission" />
      </div>

      {/* Image placée au-dessus sur mobile, à droite sur desktop */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 w-full max-w-[96%] IMAGE">
        
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="https://www.compilatio.net/media/cache/blog_main/2022/03/4375-visuels-d-entete-de-blog.jpg"
            alt="Illustration des valeurs de SEED"
            width={800}
            height={300}
            className="w-[600px] h-[500px] rounded-lg shadow-md object-cover MISSION_IMG"
          />
        </div>

        {/* Texte */}
        <div className="w-full lg:w-1/2 space-y-6 max-h-[80vh] overflow-y-auto px-2">
          
          {/* NOS VALEURS */}
          <details className="p-4 rounded-md">
            <summary className="cursor-pointer font-extrabold">NOS VALEURS</summary>
            <div className="mt-2 space-y-3">
              <h3 className="font-bold">Le respect</h3>
              <p>Dans l'Organisation non Gouvernementale Sauvons l'Enfance en Difficulté (SEED), nous priorisons le respect entre collaborateurs, envers les ainés ainsi qu'envers les enfants dont la prise en charge nous est confiée.</p>

              <h3 className="text-lg font-bold">L'intégrité</h3>
              <p>Tout ce que nous avons dans notre Organisation, nous l'avons acquis par des moyens clairs et légaux; de ce fait, aucune tendance à se laisser aller à la corruption ne sera tolérer de la part d'un collaborateur.</p>

              <h3 className="text-lg font-bold">La responsabilité</h3>
              <p>En tant que pères et mères des familles, les enfants que nous prenons en charge au sein de l'Organisation sans But Lucratif (O.B.L) Sauvons l'Enfance en Difficulté (SEED) sont à traîter avec amour comme s'ils étaient les nôtres et nous devons veiller sur eux dans discrimination aucune.</p>

              <h3 className="text-lg font-bold">L'engagement</h3>
              <p>En acceptant de s'engager pour cette noble cause, nous nous engageons à donner le meilleur de nous-même pour atteindre l'idéal, ceci dit : "il faut éviter à tout prix de se trouver des faux-fuyants pour ne pas remplir la mission que nous sommes censés accomplir".</p>
            </div>
          </details>

          {/* NOTRE VISION */}
          <details className="p-4 border rounded-md">
            <summary className="cursor-pointer text-xl font-extrabold uppercase">Notre vision</summary>
            <div className="mt-2 space-y-3">
              <h3 className="text-lg font-bold">Les capacités des enfants</h3>
              <p>Nous nous engageons à révéler le potentiel unique de chaque enfant en difficulté. Notre mission : les accompagner avec détermination vers l'autonomie et l'épanouissement, sans compromis.</p>

              <h3 className="text-lg font-bold">Le développement des talents</h3>
              <p>Nous identifions et cultivons les talents de chaque enfant, quels que soient leurs défis physiques ou cognitifs. Notre conviction : toutes les différences cachent des capacités extraordinaires à faire grandir.</p>

              <h3 className="text-lg font-bold">Les valeurs</h3>
              <p>Nous nous engageons à accompagner les enfants avec amour et sans discrimination, comme s’ils étaient nos propres enfants. Nous encourageons aussi les valeurs et le sens du devoir en eux.</p>

              <h3 className="text-lg font-bold">L'éducation</h3>
              <p>L'Organisation à But non Lucratif Sauvons l'Enfance en Difficulté (O.B.L SEED) vise à promouvoir l'éducation intégrale des enfants en difficulté en les accompagnant grâce à des moyens matériels et financiers.</p>
            </div>
          </details>

          {/* NOS PROJETS */}
          <details className="p-4 border rounded-md">
            <summary className="cursor-pointer text-xl font-extrabold uppercase">Nos projets</summary>
            <div className="mt-2 space-y-3">
              <h3 className="text-lg font-bold">Court terme</h3>
              <p>Nous nous engageons à révéler le potentiel unique de chaque enfant en difficulté. Notre mission : les accompagner avec détermination vers l'autonomie et l'épanouissement, sans compromis.</p>

              <h3 className="text-lg font-bold">Moyen terme</h3>
              <p>Création des sites internet, création des plateformes de streaming, lancement de boutique en présentiel, lancement des projets agricoles.</p>

              <h3 className="text-lg font-bold">Long terme</h3>
              <p>Construction d'une école d'enseignement personnalisé, lancement d'un centre hospitalier, centre agro-éducatif et centre de formation des jeunes en difficulté atteints d'une anomalie.</p>
            </div>
          </details>

          {/* RÉSULTATS */}
          <details className="p-4 border rounded-md">
            <summary className="cursor-pointer text-xl font-extrabold uppercase">Résultats escomptés</summary>
            <div className="mt-2 space-y-3">
              <h3 className="font-bold">Rehaussement de l'estime de soi</h3>
              <p>Nous visons à renforcer l'estime de soi des enfants en difficulté atteint d'une anomalie.</p>

              <h3 className=" font-bold">Gain d'autonomie</h3>
              <p>Permettre aux enfants en difficultés atteint d'une anomalie physique et/ou mentale de gagner en indépendance.</p>

              <h3 className=" font-bold">Amélioration de la communication</h3>
              <p>Construction d'une école d'enseignement personnalisé, lancement d'un centre hospitalier, centre agro-éducatif et centre de formation des jeunes en difficulté atteints d'une anomalie.</p>

              <h3 className=" font-bold">Intégration</h3>
              <p>Au sein de l'ONG SEED, nous visons à favoriser l'inclusion des enfants en milieu social, scolaire et professionnel.</p>

              <h3 className=" font-bold">Réussite</h3>
              <p>Dans l'Organisation non Gouvernementale Sauvons l'Enfance en Difficulté, nous encourageons la réussite professionnelle, scolaire et professionnelle.</p>
            </div>
          </details>

        </div>
      </div>
    </div>
  )
}

export default Mission
