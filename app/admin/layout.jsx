import { assets } from "@/Assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlocMDP from "@/components/AdminComponents/BlocMDP";


export default function Layout({ children }) {
  return (
    <>
      <div className="hidden lg:flex">
        <BlocMDP />
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-9.5 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-bold uppercase text-2xl">
              Tableau de bord{" "}
              <span className="font-medium lowercase text-gray-300 select-none">
                (Administrateur)
              </span>
            </h3>
            <Image src={assets.seed_logo} width={40} alt="" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
