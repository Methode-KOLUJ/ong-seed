import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Link from 'next/link'

const Footer = () => {
   const year = new Date().getFullYear();

  return (
    <footer className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center w-full'>
       <p className='text-xs lg:text-sm text-white'>
         &copy; <span className='text-blue-300'>{year}</span> ONG SEED | Développé par{' '}
         <span className='hover:text-gray-500'>
           <Link href={'https://wa.me/+243812539000'}>KOLUJ_DEV</Link>
         </span>
       </p>
       <div className='flex cursor-pointer'>
        <Link href={'https://www.facebook.com/Sauvonslenfanceendifficulte'}>
          <Image src={assets.facebook_icon} alt='' width={40} className='mb-1 mr-1' title='facebook'/>
        </Link>
        <Link href={"#"}>
          <Image src={assets.twitter_icon} alt='' width={40} className='mb-1 mr-1' title='twitter'/>
        </Link>
        <Link href={'https://www.instagram.com/ongseedtv'}>
          <Image src={assets.instagram_icon} alt='' width={40} className='mb-1 mr-1' title='instagram'/>
        </Link>
        <Link href={'https://www.linkedin.com/in/jeannot-kashala-49653b356'}>
          <Image src={assets.linkedin_icon} alt='' width={40} className='mb-1 mr-1' title='linkedin'/>
        </Link>
        <Link href={'https://www.youtube.com/@SEEDTVCINEMAFran%C3%A7ais'}>
          <Image src={assets.youtube_icon} alt='' width={40} className='mb-1' title='youtube'/>
        </Link>
       </div>
    </footer>
  )
}

export default Footer
