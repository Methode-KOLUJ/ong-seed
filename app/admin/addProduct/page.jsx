"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import TipTapEditor from "@/components/TipTapEditor";

const Page = () => {
  const [image, setImage] = useState(false);
  const [editorRef, setEditorRef] = useState(null); // Référence de l'éditeur TipTap
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Tout",
    author: "Jeannot KASHALA, Coordonnateur",
    authorImg: "/Seed-logo.webp",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData);

      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Tout",
          author: "Jeannot KASHALA, Coordonnateur",
          authorImg: "/Seed-logo.webp",
        });

        if (editorRef) {
          editorRef.commands.clearContent(); // Vider le contenu de TipTap
        }
      } else {
        toast.error("Erreur lors de la soumission !");
      }
    } catch (error) {
      toast.error("Une erreur s’est produite !");
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="pt-5 px-5 sm:pt-12 sm:pl-16 hidden lg:block"
      >
        <p className="text-xl">Télécharger la miniature</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt=""
          />
        </label>
        <input
          onChange={(event) => setImage(event.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />

        <p className="text-xl mt-4">Titre du blog</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Saisissez ici !"
          required
        />

        <p className="text-xl mt-4">
          Contenu du blog <span className="text-sm">(Éléments HTML requis)</span>
        </p>
        <TipTapEditor
          value={data.description}
          onChange={(html) =>
            setData((prev) => ({ ...prev, description: html }))
          }
          onEditorReady={setEditorRef}
        />

        <p className="mt-6 text-xl">Choisissez la catégorie</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Education">Education</option>
          <option value="Santé mentale">Santé Mentale</option>
          <option value="Activité de Terrain">Activité de Terrain</option>
          <option value="Témoignages">Témoignages</option>
          <option value="Nos donateurs">Nos donateurs</option>
        </select>

        <br />
        <button
          type="submit"
          className="mt-6 w-40 h-12 bg-black text-white mb-6 cursor-pointer"
        >
          PUBLIER
        </button>
      </form>
    </>
  );
};

export default Page;
