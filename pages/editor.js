
import { useState } from 'react';

export default function Editor() {
  const [file, setFile] = useState(null);
  const [instructions, setInstructions] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">AI 콘텐츠 편집기</h1>
      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
        <textarea
          placeholder="편집 요청을 입력하세요"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full h-32 p-2 text-black"
        />
        <button className="mt-4 bg-blue-600 px-4 py-2 rounded">제출</button>
      </div>
    </div>
  );
}
