import React from 'react'
import { assets} from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const BlogItem = ({title, description, category, image, id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-5px_5px_0px_#000000] hover:scale-[1.02] transition duration-600 ease-in-out'>
    <Link href={`/blogs/${id}`}><Image src={image} alt='' width={400} height={400} className='border-b border-black'/></Link>
    <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
    <div className='p-5'>
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'
        dangerouslySetInnerHTML={{__html:description.slice(0,120)}}
        ></p>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
            En savoir plus  <Image src={assets.arrow} alt='' width={12} className='ml-2'/>
        </Link>
    </div>
    </div>
  )
}

export default BlogItem
