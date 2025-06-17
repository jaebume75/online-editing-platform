import { useState } from "react";

export default function OnlineEditingPlatform() {
  const [file, setFile] = useState(null);
  const [instructions, setInstructions] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6 font-sans">
      <div className="max-w-3xl mx-auto shadow-xl rounded-xl bg-white p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🎬 디지털 콘텐츠 AI 편집 플랫폼
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">1. 콘텐츠 업로드</h2>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0])}
              className="w-full p-3 border rounded-md border-gray-300 text-sm"
            />
            {file && (
              <p className="text-sm text-green-600 mt-2">
                ✅ 업로드 완료: {file.name}
              </p>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">2. 편집 요청</h2>
            <textarea
              placeholder="예: 색상 보정, 자막 추가, 배경 제거 등"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full h-32 p-3 border rounded-md border-gray-300 text-sm"
            />
            <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full">
              ✏️ 편집 요청 제출
            </button>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-gray-500 text-sm">
          © 2025 박재범 디지털 편집 플랫폼. All rights reserved.
        </div>
      </div>
    </div>
  );
}
