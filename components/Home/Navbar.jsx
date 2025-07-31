//components/Navbar.jsx

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiMenu, FiX } from "react-icons/fi"
import Image from "next/image"
import { assets } from "@/Assets/assets"

const Elements = [
  { Nom: "Accueil", Lien: "/" },
  { Nom: "Découvrez nos 5 ans d'histoire", Lien: "/Histoire" },
  { Nom: "Postuler", Lien: "/Postuler" },
  { Nom: "Faire un don", Lien: "/Don" },
  {
    Nom: "Médias",
    Lien: "#",
    SubLinks: [
      { Nom: "Films", Lien: "/Films" },
      { Nom: "Magazine", Lien: "/Magazine" },
    ],
  },
  { Nom: "ChatBot", Lien: "/Chatbot" },
  { Nom: "Boutique", Lien: "https://boutique-seed.com" },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (link) => pathname === link

  useEffect(() => {
    const handleScroll = () => {

      if(pathname == "/"){
      setScrolled(window.scrollY > 100)
        
      }else if(pathname == "/Histoire"){
      setScrolled(window.scrollY > 60)
      }else if(pathname == "/Films"){
      setScrolled(window.scrollY > 40)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return (
    <header
      className={`fixed w-[100%] top-0 py-2 z-50 font-sans font-normal lg:font-semibold transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "transparent"
      }`}
    >
      <div className="max-w-[98%] mx-auto px-2 flex justify-between items-center">
        {/* Logo */}
        <Link href={"#"}>
          <div className="text-xl font-bold">
            <Image
              src={assets.Black_logo}
              width={150}
              alt="ONG SEED"
              className="w-[130px] sm:w-auto"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex space-x-1 items-center">
          {Elements.map((element, index) => (
            <div key={index} className="relative group">
              <Link
                href={element.Lien}
                className={`px-2 py-1 rounded transition-all duration-300 ${
                  isActive(element.Lien)
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {element.Nom}
              </Link>

              {element.SubLinks && (
                <div className="absolute left-0 mt-[0.4rem] bg-white border border-gray-200 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-20 min-w-[8rem]">
                  {element.SubLinks.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.Lien}
                      className={`block px-4 py-2 rounded transition-all duration-300 ${
                        isActive(sub.Lien)
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {sub.Nom}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-2xl"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 xl:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Nav Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-xs bg-white shadow-lg z-40 transform transition-transform duration-300 xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-2">
          {Elements.map((element, index) => (
            <div key={index}>
              <Link
                href={element.Lien}
                className={`block py-2 font-semibold px-3 rounded transition-all duration-300 ${
                  isActive(element.Lien)
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {element.Nom}
              </Link>

              {element.SubLinks && (
                <div className="pl-4 space-y-1">
                  {element.SubLinks.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.Lien}
                      className={`block py-1 px-3 text-sm rounded transition-all duration-300 ${
                        isActive(sub.Lien)
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.Nom}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
