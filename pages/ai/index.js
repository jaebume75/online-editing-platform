
import { useState } from "react";

export default function AIImageVideo() {
  const items = [
    { title: "Studio Portrait", img: "/assets/sample1.jpg" },
    { title: "Fashion Shot", img: "/assets/sample2.jpg" },
    { title: "Urban Lookbook", img: "/assets/sample3.jpg" },
    { title: "Color Pop Style", img: "/assets/sample4.jpg" }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <header className="border-b px-6 py-4 flex justify-between items-center">
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="/ai" className="text-black font-bold">AI Image and Video</a>
          <span className="text-gray-400">Music (Coming Soon)</span>
          <span className="text-gray-400">Templates (Coming Soon)</span>
          <a href="/pricing" className="ml-4 text-gray-700 hover:text-black">Pricing</a>
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <a href="/auth/signin" className="text-gray-700 hover:text-black">Sign in</a>
          <a href="/auth/signup" className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900">Start Free Now</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold mb-2">AI Image and Video</h1>
        <p className="text-lg text-gray-500 mb-10">Quickly edit images and videos with the power of AI</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl shadow hover:shadow-xl transition">
              <img src={item.img} alt={item.title} className="w-full h-80 object-cover" />
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white text-black text-sm font-medium px-4 py-1 rounded">Select</button>
                <button className="border border-white text-white text-sm font-medium px-4 py-1 rounded">Explore</button>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow">{item.title}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
