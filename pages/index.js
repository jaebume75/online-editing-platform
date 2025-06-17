
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-12">
      <h1 className="text-5xl font-bold mb-4">AI 콘텐츠를 다시 상상하다</h1>
      <p className="text-lg text-gray-400 mb-8">당신의 콘텐츠, AI의 감각으로 재창조됩니다.</p>
      <a href="/editor" className="px-6 py-3 bg-white text-black rounded hover:bg-gray-300 transition">지금 시작하기</a>
    </div>
  );
}
