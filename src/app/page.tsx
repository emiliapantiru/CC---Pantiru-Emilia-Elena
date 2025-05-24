"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("");
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    setQuote("");
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();
    setQuote(data.quote || "Nu s-a putut genera citatul.");
    setLoading(false);
  };

  const saveQuote = async () => {
    await fetch("/api/favorites/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quote, weather: "default" }),
    });
    alert("Citat salvat!");
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white border rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
        Citat motivațional după vreme
      </h1>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Introdu orașul"
        className="w-full border p-3 rounded mb-4"
      />
      <button
        onClick={getQuote}
        disabled={loading}
        className="w-full bg-indigo-600 text-white p-3 rounded"
      >
        {loading ? "Se generează..." : "Generează citat"}
      </button>
      {quote && (
        <div className="mt-4 p-4 bg-gray-100 rounded text-center">
          <p className="italic text-xl mb-4">“{quote}”</p>
          <button
            onClick={saveQuote}
            className="bg-green-600 text-white py-2 px-4 rounded"
          >
            Salvează
          </button>
        </div>
      )}
      <p className="mt-6 text-center">
        <Link href="/favorites" className="text-indigo-600 underline">
          Vezi favoritele tale
        </Link>
      </p>
    </div>
  );
}
