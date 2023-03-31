export function Main({ children }: { children: any }) {
  return (
    <main className="min-h-screen w-screen overflow-hidden bg-slate-800 text-white">
      <div className="m-auto p-4 md:p-6 w-[90rem] max-w-full">{children}</div>
    </main>
  );
}
