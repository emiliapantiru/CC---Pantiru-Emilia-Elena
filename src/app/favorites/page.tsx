"use client";
import { useEffect, useState } from "react";

type Favorite = {
  id: string;
  quote: string;
  weather: string;
};

const labels: Record<string, string> = {
  sunny: "☀️ Soare",
  rain: "🌧️ Ploaie",
  cloudy: "☁️ Nori",
  default: "🌤️ Altă vreme",
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/favorites");
      const data = await res.json();
      setFavorites(data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white border rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Citate favorite
      </h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">Nu ai salvat niciun citat.</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((fav) => (
            <li key={fav.id} className="bg-gray-100 p-4 rounded shadow">
              <p className="italic text-gray-800 text-lg">“{fav.quote}”</p>
              <span className="text-sm text-indigo-600 block mt-2">
                Vreme: {labels[fav.weather] || "Nespecificată"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
