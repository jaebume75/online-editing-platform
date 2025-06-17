
export function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full h-32 p-3 border border-gray-700 bg-gray-800 rounded text-white"
    />
  );
}
