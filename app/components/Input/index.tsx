export function Input({
  type,
  name,
  value,
  placeholder,
  onChange,
}: {
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}) {
  return (
    <input
      className="shadow appearance-none rounded w-full py-2 px-3 bg-slate-500 text-white leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
