import React from 'react'
import Histoire from '@/components/Histoire/Histoire'
import ScrollSmooth from '@/components/ScrollSmooth'
import { SEO } from '@/components/SEO/SEO'

export const metadata = SEO({
  title: "Notre histoire",
  description:
    "Apprenez-en davantage sur notre organisation en lisant notre histoire de sa fondation jusqu'à ces projets d'avenir.",
});

const page = () => {
  return (
    <div className='mt-30'>
      <ScrollSmooth>
      <Histoire/>
      </ScrollSmooth>
    </div>
  )
}

export default page
