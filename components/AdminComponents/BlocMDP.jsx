'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';


const BlocMDP = () => {
  const [authorized, setAuthorized] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [password, setPassword] = useState('');

  const handlePasswordSubmit = async () => {
    try {
      const res = await fetch('/api/check-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success('Vous êtes l\'administrateur ❤', { autoClose: 3000 });
        setTimeout(() => {
          setAuthorized(true);
          setShowModal(false);
        }, 2000);
      } else {
        toast.error('Vous n\'êtes pas administrateur 😢', { autoClose: 3000 });
      }
    } catch (error) {
      toast.error('Il y a erreur !');
    }
  };

  useEffect(() => {
    setShowModal(true);
    return () => {
      toast.dismiss(); // Nettoyage
    };
  }, []);

  return (
    <>
      {!authorized && showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 select-none">
          {/* Background Image */}
          <div className="fixed inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
            />
            {/* Optionnel : un overlay sombre pour améliorer lisibilité */}
            <div className="absolute inset-0 bg-black/90 bg-opacity-60"></div>
          </div>

          {/* Modale */}
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center z-10">
            <h2 className="text-lg font-bold mb-4">CODE ADMINISTRATEUR</h2>
            <input
              type="password"
              className="w-full p-2 border rounded mb-3 text-center"
              placeholder="🔒"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handlePasswordSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              OUVRIR
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlocMDP;
