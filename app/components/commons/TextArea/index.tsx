import { LabelError } from "../LabelError";

export function TextArea({
  name,
  value,
  placeholder,
  defaultValue,
  onChange,
  end,
  label,
  required,
  error,
  maxLength,
}: {
  name: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
  end?: string;
  label?: string;
  required?: boolean;
  error?: string;
  maxLength: number;
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm mb-1">{label + (required ? " *" : "")}</label>
      )}
      <div className="relative w-full">
        <textarea
          className="appearance-none w-full t-transparent bg-transparent px-4 py-4 text-sm rounded-lg border border-white/10"
          name={name}
          rows={2}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          required={required}
        />
        <label className="absolute right-0 top-0 bottom-0 px-4 py-4">
          {end}
        </label>
      </div>
      {error && <LabelError>{error}</LabelError>}
    </div>
  );
}
