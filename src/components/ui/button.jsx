export function Button({ children, size = "base" }) {
  return (
    <button className={`px-4 py-2 rounded text-white bg-blue-600 text-${size}`}>
      {children}
    </button>
  );
}
