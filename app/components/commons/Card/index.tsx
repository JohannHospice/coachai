export function Card({
  children,
  className,
}: {
  children: any;
  className: string;
}) {
  return (
    <div className={"border border-white/10 rounded-2xl p-8 " + className}>
      {children}
    </div>
  );
}
