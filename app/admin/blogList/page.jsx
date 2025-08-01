"use client";

import React, { useEffect, useState } from "react";
import BlogTableItem from "@/components/AdminComponents/BlogTableItem";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {

  const [blogs,setBlogs]=useState([]);

  const fetchBlogs = async ()=>{
    const response = await axios.get('/api/blog')

    setBlogs(response.data.blogs);
  }

  const deleteBlog = async (mongoId)=>{
    const response = await axios.delete('/api/blog', {
      params:{
        id:mongoId
      }
    })
    toast.success(response.data.msg);
    fetchBlogs()
  }

  useEffect(()=>{
fetchBlogs();
  },[])

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 hidden lg:block">
      <h1 className="text-2xl">Toutes les publications</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-auto mt-4 border border-gray-400 scollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Nom de l'auteur
              </th>
              <th scope="col" className="px-6 py-3">
                Titre du blog
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Supprimer
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index)=>{
              return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
