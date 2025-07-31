import { Outfit } from "next/font/google";
import { Inter } from "next/font/google"
import "./globals.css";
import Footer from "@/components/Footer";
import { RootClientLayout } from "./route-client-layout";


const outfit = Outfit({
  subsets: ["latin"],
  weigt: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choisis les graisses dont tu as besoin
  variable: "--font-inter",      // optionnel, pour CSS custom
  display: "swap"
})

export const metadata = {
  title: "ONG SEED - Officiel",
  description: "Le site officiel de l'Organisme sans But Lucratif (O.B.L) Sauvons l'Enfance en Difficulté (SEED)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className={outfit.className}>
       <main className="flex-1">
        <RootClientLayout>{children}</RootClientLayout>
        </main>
      <Footer />
      </body>
    </html>
  );
}
