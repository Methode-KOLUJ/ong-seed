import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col bg-slate-100 border border-black/70">
      <div className="px-2 sm:pl-14 py-3 border-b border-gray-900">
        <Link href={"/"}>
          <Image src={assets.Black_logo} width={160} alt="" />
        </Link>
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href={'/admin/addProduct'} className="flex items-center border border-black gap-3 font-medium  px-3 py-2 bg-white hover:shadow-[-5px_5px_0px_#000000] hover:scale-[1.01] transition duration-600 ease-in-out">
            <Image src={assets.add_icon} alt="" width={28}/>
            <p>Ajouté un blog</p>
          </Link>
          <Link href={'/admin/blogList'} className="mt-5 flex items-center border border-black gap-3 font-medium  px-3 py-2 bg-white hover:shadow-[-5px_5px_0px_#000000] hover:scale-[1.01] transition duration-600 ease-in-out">
            <Image src={assets.blog_icon} alt="" width={28} />
            <p>Liste des blogs</p>
          </Link>
          <Link href={'/admin/subscriptions'} className="mt-5 flex items-center border border-black gap-3 font-medium  px-3 py-2 bg-white hover:shadow-[-5px_5px_0px_#000000] hover:scale-[1.01] transition duration-600 ease-in-out">
            <Image src={assets.email_icon} alt="" width={28} />
            <p>Utilisateurs</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
