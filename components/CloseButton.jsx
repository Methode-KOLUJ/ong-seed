'use client'
import React from "react";
import { useRouter } from "next/navigation";


const CloseButton = ({Lien}) => {

const router = useRouter()



  return (
    <div className="fixed bottom-1 right-1  z-30 flex flex-col items-center gap-3 whitespace-nowrap">
      <button
        onClick={() => router.back()}
        className="px-2 md:px-5 py-3 bg-red-700 text-white font-semibold rounded-full hover:bg-red-600 transition cursor-pointer"
      >
        <p className="text-lg md:text-xl lg:text-2xl select-none">{Lien}</p>
      </button>
    </div>
  );
};

export default CloseButton;
