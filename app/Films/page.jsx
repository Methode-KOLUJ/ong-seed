import React from "react";
import Films from "@/components/Films/Films";
import { SEO } from "@/components/SEO/SEO";

export const metadata = SEO({
  title: "SEED TV Cinéma",
  description:
    "L'Organisme sans But Lucratif Sauvons l'Enfance en Difficulté investi aussi son argent dans la production des films éducatifs.",
});

const Film = () => {
  return (
    <div>
      <Films />
    </div>
  );
};

export default Film;
