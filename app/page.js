'use client'

import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Mission from "@/components/Home/Mission";
import Partenaires from "@/components/Home/Partenaires";
import Services from "@/components/Home/Services";
import ScrollSmooth from "@/components/ScrollSmooth";


export default function Magasine() {
  return (
    <>
     <ScrollSmooth>
      <Hero/>
      <Partenaires/>
      <About/>
      <Mission/>
      <Services/>
      </ScrollSmooth>
    </>
  );
}
