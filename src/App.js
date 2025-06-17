
import { useState } from "react";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";
import { Button } from "./components/Button";

export default function OnlineEditingPlatform() {
  const [file, setFile] = useState(null);
  const [instructions, setInstructions] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const sampleMedia = [
    { type: "image", src: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg" },
    { type: "image", src: "https://images.pexels.com/photos/375570/pexels-photo-375570.jpeg" },
    { type: "image", src: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg" },
    { type: "image", src: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg" },
    { type: "image", src: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg" },
    { type: "image", src: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg" },
    { type: "image", src: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg" },
    { type: "image", src: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-12 max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4">AI 콘텐츠 편집 스튜디오</h1>
        <p className="text-gray-400 text-lg">이미지·영상 콘텐츠를 AI로 빠르게 편집하세요</p>
      </header>

      <div className="bg-gray-900 rounded-xl p-8 grid md:grid-cols-2 gap-10">
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(e) => {
            e.preventDefault(); setDragActive(false);
            const uploadedFile = e.dataTransfer.files[0];
            setFile(uploadedFile);
          }}
          className={\`flex flex-col justify-center items-center border-2 border-dashed rounded p-6 transition \${dragActive ? "border-blue-400 bg-gray-800" : "border-gray-700 bg-gray-800"}\`}
        >
          <h3 className="text-lg font-semibold mb-2">1. 콘텐츠 업로드</h3>
          <Input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
          <p className="text-sm text-gray-400">또는 이곳에 파일을 드래그하세요</p>
          {file && <p className="text-sm text-green-400 mt-2">✅ 업로드 완료: {file.name}</p>}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. 편집 요청</h3>
          <Textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="예: 밝기 조절, 배경 흐리기, 비디오 자막 추가 등"
          />
          <Button>✏️ 편집 요청 제출</Button>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">🎨 AI 예시 콘텐츠</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sampleMedia.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow hover:scale-105 transition">
              <img src={item.src} alt={\`샘플\${index}\`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-gray-500 py-6 border-t border-gray-800 mt-20">
        © 2025 박재범 디지털 편집 플랫폼. All rights reserved.
      </footer>
    </div>
  );
}
