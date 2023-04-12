export function TextSection({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <div>
      <div className="text-xs mb-2">{title}</div>
      <div className="text-md whitespace-pre-wrap">{children}</div>
    </div>
  );
}
