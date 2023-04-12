export function Container({ children }: { children: any }) {
  return (
    <div className="m-auto px-4 md:px-6 w-[80rem] max-w-full">{children}</div>
  );
}
