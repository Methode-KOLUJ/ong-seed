"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Titre from "../Titre";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID;
const MAX_RESULTS = 12;

let dbPromise = null;

const openDB = (name, version) => {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(name, version);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("videos")) {
          db.createObjectStore("videos", { keyPath: "token" });
        }
      };

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }
  return dbPromise;
};

const saveVideos = async (db, token, data) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("videos", "readwrite");
    const store = transaction.objectStore("videos");
    const request = store.put({ token, ...data });

    request.onsuccess = () => resolve();
    request.onerror = (event) => reject(event.target.error);
  });
};

const getVideos = async (db, token) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("videos", "readonly");
    const store = transaction.objectStore("videos");
    const request = store.get(token);

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

const shouldFetchNewVideos = () => {
  const lastFetchDate = localStorage.getItem("lastFetchDate");
  if (!lastFetchDate) return true;

  const now = new Date();
  const lastFetch = new Date(lastFetchDate);
  const diffInDays = Math.floor(
    (now.getTime() - lastFetch.getTime()) / (1000 * 60 * 60 * 24)
  );

  return diffInDays >= 2;
};

const Film = () => {
  const storedPage =
    typeof window !== "undefined"
      ? sessionStorage.getItem("currentPage")
      : null;
  const storedPageToken =
    typeof window !== "undefined" ? sessionStorage.getItem("pageToken") : null;

  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState(storedPageToken || "");
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(
    storedPage ? parseInt(storedPage, 10) : 1
  );

  const router = useRouter();

  const fetchVideos = async (token = "", page = 1) => {
    const db = await openDB("youtubeCache", 1);

    const useCache = page !== 1 || !shouldFetchNewVideos();

    if (useCache) {
      const cachedData = await getVideos(db, token);
      if (cachedData) {
        updateState(cachedData, token, page);
        return;
      }
    }

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}&pageToken=${token}`
      );
      const data = await response.json();
      await saveVideos(db, token, data);

      if (page === 1) {
        localStorage.setItem("lastFetchDate", new Date().toISOString());
      }

      updateState(data, token, page);
    } catch (error) {
      console.error("Erreur lors de la récupération des vidéos :", error);
    }
  };

  const updateState = (data, token, page) => {
    setVideos(data.items || []);
    setNextPageToken(data.nextPageToken || null);
    setPrevPageToken(data.prevPageToken || null);
    setTotalResults(data.pageInfo?.totalResults || 0);
    setCurrentPage(page);
    setPageToken(token);
    sessionStorage.setItem("currentPage", page.toString());
    sessionStorage.setItem("pageToken", token);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchVideos(pageToken, currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(totalResults / MAX_RESULTS),
    [totalResults]
  );

  return (
    <section className="relative bg-white min-h-screen px-6 py-10 md:py-20">
      <div className="max-w-[95%] mx-auto text-center relative">
        <Titre Titre1={"SEED TV"} Titre2={"Cinéma"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-6">
          {videos.map((video) => (
            <motion.div
              key={video.id.videoId}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-400"
            >
              <iframe
                className="w-full h-52 md:h-40 lg:h-44"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="text-xs font-semibold text-gray-800">
                  {video.snippet.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            className="px-4 py-2 bg-red-700 hover:bg-red-600 transition-all duration-400 text-white rounded disabled:opacity-50 cursor-pointer"
            disabled={!prevPageToken}
            onClick={() => fetchVideos(prevPageToken ?? "", currentPage - 1)}
          >
            ← Retour
          </button>
          <span className="text-gray-950 font-bold">
            {currentPage} / {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-red-700 hover:bg-red-600 transition-all duration-400 text-white rounded disabled:opacity-50 cursor-pointer"
            disabled={!nextPageToken}
            onClick={() => fetchVideos(nextPageToken ?? "", currentPage + 1)}
          >
            Suivant →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Film;
