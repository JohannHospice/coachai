export function Input({
  type,
  name,
  value,
  placeholder,
  defaultValue,
  onChange,
}: {
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
}) {
  return (
    <input
      className="appearance-none rounded-2xl w-full py-2 px-4 bg-gray-800 text-white leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
}
