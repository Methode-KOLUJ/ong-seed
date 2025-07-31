// app/api/blog/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModels";
import cloudinary from "@/lib/config/cloudinary";

const LoadDB = async () => {
  await connectDB();
};
LoadDB();

export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

export async function POST(request) {
  const formData = await request.formData();

  const image = formData.get("image");
  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Upload sur Cloudinary
  const uploadRes = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "blog_images" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    author: formData.get("author"),
    image: uploadRes.secure_url,
    authorImg: formData.get("authorImg"), 
  };

  await BlogModel.create(blogData);
  console.log("Blog enregistré ✅");

  return NextResponse.json({ success: true, msg: "Blog ajouté avec succès !" });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);

  // Récupérer le public_id pour supprimer l’image de Cloudinary
  const publicId = blog.image.split("/").slice(-1)[0].split(".")[0];
  await cloudinary.uploader.destroy(`blog_images/${publicId}`);

  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Blog supprimé 😢" });
}
