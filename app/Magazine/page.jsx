import Header from "@/components/Header";
import BlogList from "@/components/BlogList";
import { ToastContainer } from "react-toastify";
import { SEO } from "@/components/SEO/SEO";

export const metadata = SEO({
  title: "SEED Magazine",
  description:
    "L'Organisme sans But Lucratif Sauvons l'Enfance en Difficulté possède un magazine grâce auxquel il publie les articles sur l'avancement de ses activités.",
});

export default function Blog() {
  return (
    <>
    <div>
       <ToastContainer theme="dark" />
        <Header />
        <BlogList />
    </div>
    </>
  );
}
