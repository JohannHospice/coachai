export function Card({ children, color }: { children: any; color: string }) {
  return (
    <div className={"border border-gray-800 rounded-2xl p-8 " + color}>
      {children}
    </div>
  );
}
