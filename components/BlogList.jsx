'use client'


import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';
import { FiFilter } from 'react-icons/fi';

const BlogList = () => {
  const [menu, setMenu] = useState('Tout');
  const [blogs, setBlogs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
    setIsClient(true);
    // Récupère la catégorie sauvegardée après le montage côté client
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      setMenu(savedCategory);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('selectedCategory', menu);
    }
  }, [menu, isClient]);

  const categories = [
    'Tout',
    'Education',
    'Santé mentale',
    'Activité de Terrain',
    'Témoignages',
    'Nos donateurs',
  ];

  const renderButtons = () =>
    categories.map((cat) => (
      <button
        key={cat}
        onClick={() => {
          setMenu(cat);
          setShowFilters(false);
        }}
        className={`py-1 px-4 rounded-sm ${
          menu === cat ? 'bg-black text-white' : ''
        }`}
      >
        {cat}
      </button>
    ));

  return (
    <div>
      <div className='flex justify-end px-6 mt-4 lg:hidden'>
        <button onClick={() => setShowFilters(!showFilters)} className="text-2xl sm:text-3xl mb-8">
          <FiFilter />
        </button>
      </div>

      {showFilters && (
        <div className='flex flex-col gap-2 items-center my-4 lg:hidden'>
          {renderButtons()}
        </div>
      )}

      <div className='hidden lg:flex justify-center gap-6 my-10'>
        {renderButtons()}
      </div>

      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-10'>
        {blogs
          .filter((item) => (menu === 'Tout' ? true : item.category === menu))
          .map((item, index) => (
            <BlogItem
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;