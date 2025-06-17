import { useState } from "react";
import { motion } from "framer-motion";

export default function OnlineEditingPlatform() {
  const [file, setFile] = useState(null);
  const [instructions, setInstructions] = useState("");
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="bg-black border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">AI 콘텐츠 편집 스튜디오</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:underline">홈</a>
          <a href="#" className="hover:underline">AI 편집</a>
          <a href="#" className="hover:underline">가격</a>
        </nav>
      </header>

      <main className="px-6 py-12 max-w-5xl mx-auto">
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-semibold mb-4 leading-tight">이미지·영상 콘텐츠를 AI로 빠르게 편집하세요</h2>
          <p className="text-gray-400 text-lg">딥러닝 기반 자동 색보정, 배경 제거, 트렌디한 스타일 적용까지 한 번에</p>
        </motion.section>

        <motion.div
          className="bg-gray-900 rounded-xl p-8 grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragActive(false);
              const uploadedFile = e.dataTransfer.files[0];
              setFile(uploadedFile);
            }}
            className={`flex flex-col justify-center items-center border-2 border-dashed rounded p-6 transition ${dragActive ? "border-blue-400 bg-gray-800" : "border-gray-700 bg-gray-800"}`}
          >
            <h3 className="text-lg font-semibold mb-2">1. 콘텐츠 업로드</h3>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0])}
              className="w-full p-3 mb-2 text-sm bg-gray-700 border border-gray-600 rounded"
            />
            <p className="text-sm text-gray-400">또는 이곳에 파일을 드래그하세요</p>
            {file && (
              <p className="text-sm text-green-400 mt-2">✅ 업로드 완료: {file.name}</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">2. 편집 요청</h3>
            <textarea
              placeholder="예: 밝기 조절, 배경 흐리기, 비디오 자막 추가 등"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full h-32 p-3 border border-gray-700 bg-gray-800 rounded text-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition"
            >
              ✏️ 편집 요청 제출
            </motion.button>
          </div>
        </motion.div>
      </main>

      <footer className="text-center text-xs text-gray-500 py-6 border-t border-gray-800">
        © 2025 박재범 디지털 편집 플랫폼. All rights reserved.
      </footer>
    </div>
  );
}
