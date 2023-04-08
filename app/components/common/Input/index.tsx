import { LabelError } from "../LabelError";

export function Input({
  type,
  name,
  value,
  placeholder,
  defaultValue,
  onChange,
  end,
  min,
  max,
  label,
  required,
  error,
}: {
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
  end?: string;
  min?: string | number;
  max?: string | number;
  label?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm mb-1">{label + (required ? " *" : "")}</label>
      )}
      <div className="relative w-full">
        <input
          className="appearance-none w-full t-transparent bg-transparent px-4 py-4 text-sm rounded-lg border border-gray-800"
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
        <label className="absolute right-0 top-0 bottom-0 px-4 py-4">
          {end}
        </label>
      </div>
      {error && <LabelError>{error}</LabelError>}
    </div>
  );
}
