'use client'

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import Titre from "./Titre";


const Header = () => {
  const [email,setEmail]=useState('');
  const router = useRouter()

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('email',email);
    const response = await axios.post('/api/email',formData);
    if(response.data.success){
      toast.success(response.data.msg)
      setEmail("");
    }else{
      toast.error('Erreur d\'envoi')
    }
  }


  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image src={assets.Black_logo} width={150} alt='SEED LOGO' className="w-[130px] sm:w-auto"/>
        <button onClick={() => router.back()} className="flex items-center gap-2 py-1 px-3 sm:py-3 sm:px-6 border border-solid font-bold border-black hover:shadow-[-5px_5px_0px_#000000] hover:scale-[1.02] transition duration-600 ease-in-out cursor-pointer">RETOUR</button>
      </div>
      <div className="text-center my-8">
        <Titre Titre1={"SEED"} Titre2={"MAGAZINE"}/>
        <p className="mt-10 max-w-[740px] m-auto text-base sm:text-lg">Bienvenue sur notre Magasine ! Ici, nous partageons avec vous des articles utiles et inspirants concernant l'ONG SEED, notre objectif est de vous offrir une lecture agréable et enrichissante.</p>
     <form onSubmit={onSubmitHandler} className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black hover:shadow-[-5px_5px_0px_#000000] hover:scale-[1.02] transition duration-600 ease-in-out">
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Entrez votre mail" className="pl-4 outline-none"/>
        <button type="submit" className="border-l border-black py-4 px-4 sm:px-8 bg-gray-900 text-white hover:bg-black cursor-pointer transition-800">S'inscrire</button>
     </form>
      </div>
    </div>
  );
};

export default Header;