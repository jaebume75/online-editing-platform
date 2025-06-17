
import { useState } from "react";

export default function AIImageVideo() {
  const [selected, setSelected] = useState(null);
  const previews = [
    { id: 1, title: "Studio Portrait", img: "/assets/sample1.jpg" },
    { id: 2, title: "Fashion Shot", img: "/assets/sample2.jpg" },
    { id: 3, title: "Urban Lookbook", img: "/assets/sample3.jpg" },
    { id: 4, title: "Color Pop Style", img: "/assets/sample4.jpg" }
  ];

  return (
    <div className="min-h-screen bg-white text-black px-6 py-12 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">AI 이미지 & 영상 생성</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {previews.map(item => (
          <div key={item.id} className="relative group border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
            <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition">
              <button className="px-4 py-1 bg-white text-black rounded shadow hover:bg-gray-200">Select</button>
              <button className="px-4 py-1 border border-white text-white rounded hover:bg-white hover:text-black">Explore</button>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
