
export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="mt-4 w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition"
    >
      {children}
    </button>
  );
}
