import React from 'react'
import Inscription from '@/components/Inscription/Inscription'
import { SEO } from '@/components/SEO/SEO';

export const metadata = SEO({
  title: "ONG SEED - Inscription",
  description:
    "Vous pouvez adhérer à notre organisation en tant que donateur, partenaire ou bénévole juste en vous inscrivant grâce à notre formulaire intégré.",
});


const Postuler = () => {
  return (
    <div>
      <Inscription />
    </div>
  )
}

export default Postuler
