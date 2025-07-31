//app/blogs/[id]/page.jsx

"use client";

import { assets } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { use } from "react";
import { useRouter } from 'next/navigation';


const page = ({ params }) => {

  const router = useRouter()

   const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);


  const { id } = use(params); 

  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.Black_logo}
              width={180}
              alt="Logo"
              className="w-130px sm:w-auto"
            />
          </Link>
          <button onClick={() => router.back()} className="flex items-center gap-2 font-bold py-1 px-3 sm:py-3 sm:px-6 border border-black hover:shadow-[-5px_5px_0px_#000000] hover:scale-[1.02] transition duration-600 ease-in-out cursor-pointer">
            RETOUR
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            width={60}
            height={60}
            alt="Auteur"
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto -mt-24 mb-10">
        <Image
          src={data.image}
          width={1280}
          height={720}
          alt="Image de blog"
          className="border-4 border-white"
        />

        <div
          className="blog-content prose max-w-none"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        <div className="my-16">
          <p className="text-black font-semibold my-4 ">Partager l'article sur</p>
          <div className="flex">
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}><Image src={assets.facebook_icon} width={45} className='mr-2 shadow-sm shadow-gray-400 rounded-full' alt="facebook" /></Link>
            <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Découvrez notre article !`}> <Image src={assets.twitter_icon} width={45} className='mr-2 shadow-sm shadow-gray-400 rounded-full' alt="twitter" /></Link>
            <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`}><Image src={assets.linkedin_icon} alt='' width={45} className='mr-2 shadow-sm shadow-gray-400 rounded-full' title='linkedin'/></Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default page;
