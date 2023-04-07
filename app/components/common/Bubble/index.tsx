export function Bubble({ children }: { children: any }) {
  return (
    <div className="rounded-full px-2 py-1 bg-gray-600 text-white text-xs">
      {children}
    </div>
  );
}
