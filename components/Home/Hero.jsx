import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Link from "next/link"

const slides = [
  {
    title: "benevolat",
    description: "Postulez pour faire partie de notre grande équipe",
    lien: "/Postuler",
    button: "Postuler",
  },
  {
    title: "MAGAZINE",
    description: "Apprenez davantage sur notre organisation en nous lisant au quotidien",
    lien: "/Magazine",
    button: "Lire",
  },
  {
    title: "Partenariat",
    description: "Devenez notre partenaire et placez votre marque sur notre bande défilante",
    lien: "/Postuler",
    button: "Postuler",
  },
   {
    title: "Contribution",
    description: "Faites avancer notre projet en devenant donateur",
    lien: "/Don",
    button: "Faire un don",
  },
]


const Hero = () => {
  return (
    <section className="relative w-[100%] h-[90vh] md:w-[100%] md:h-[100vh] overflow-hidden rounded-sm HERO">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdHAyNTYtYmFja2dyb3VuZC0yNS5qcGc.jpg" // remplace ce chemin par ton image
          alt="background"
          className="w-full h-full object-cover select-none"
        />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 6000 }}
          loop
          className="w-full h-full"
        >
          {slides.map(({ title, description, lien, button }, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full flex items-center justify-center HERO_TEXT">
                <div className="flex flex-col items-center justify-center text-center px-4 max-w-[95%]">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 text-gray-50 bg-gray-900 p-2 uppercase HERO_TITRE">
                    {title}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-10 text-black">
                    {description}
                  </p>
                    <Link
                      href={lien}
                      className="px-6 md:px-10 py-4 bg-red-700 text-white font-semibold rounded-md hover:bg-red-600 transition uppercase animate-floating"
                    >
                      {button}
                    </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}


export default Hero
