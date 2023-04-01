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
      className="text-ellipsis overflow-hidden t-transparent bg-transparent px-3 py-2.5 text-sm"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    >
      <option value="" disabled selected>
        {placeholder}
      </option>
      {children}
    </select>
  );
}
