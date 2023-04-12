export function Heading({
  children,
  title,
}: {
  title: string;
  children: string;
}) {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-2">{title}</h1>
      <h2 className="text-xl text-white/60 max-w-[50rem] mb-2">{children}</h2>
    </div>
  );
}
