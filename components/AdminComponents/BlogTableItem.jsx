import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const BlogTableItem = ({ authorImg, title, author,date,deleteBlog, mongoId }) => {

const BlogDate = new Date(date);
const formattedDate = BlogDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  const imageSrc =
    typeof authorImg === "string" && authorImg.trim() !== ""
      ? authorImg
      : assets.seed_logo;

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image src={imageSrc} alt="Auteur" width={40} height={40} />
        <p>{author?author:'Sans Auteur'}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "Sans titre"}</td>
      <td className="px-6 py-4">{formattedDate}</td>
      <td onClick={()=>deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer hover:text-red-600">X</td>
    </tr>
  );
};

export default BlogTableItem;
