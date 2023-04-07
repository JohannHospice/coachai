export function Select({
  children,
  name,
  value,
  placeholder,
  defaultValue,
  onChange,
  label,
  required,
  error,
}: {
  children: any;
  name: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
  label?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm mb-1">{label + (required ? " *" : "")}</label>
      )}
      <select
        className="text-ellipsis overflow-hidden t-transparent bg-transparent px-4 py-4 text-sm rounded-lg border border-gray-800"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {children}
      </select>
      <label className="text-sm text-red-500 mt-1">{error}</label>
    </div>
  );
}