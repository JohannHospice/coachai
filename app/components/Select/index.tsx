export function Select({
  children,
  name,
  value,
  placeholder,
  defaultValue,
  onChange,
}: {
  children: any;
  name: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
}) {
  return (
    <select
      className="shadow appearance-none rounded w-full py-2 px-3 bg-slate-500 text-white leading-tight focus:outline-none focus:shadow-outline"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  );
}
