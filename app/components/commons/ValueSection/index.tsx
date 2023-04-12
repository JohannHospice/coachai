export function ValueSection({
  title,
  value,
  unit,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  unit?: string;
  icon?: any;
}) {
  return (
    <div className="flex flex-col gap-2">
      {Icon && <Icon className="max-w-[48px]" />}
      <h5 className="text-xs">{title}</h5>
      <div className="text-2xl font-semibold">
        {value} <span className="text-sm">{unit}</span>
      </div>
    </div>
  );
}
