export function CardNutritional({
  min,
  max,
  unit,
  title,
  color,
  icon: Icon,
}: {
  min: string | number;
  max: string | number;
  unit: string;
  title: string;
  color: string;
  icon?: any;
}) {
  return (
    <div className={`rounded-2xl ${color} p-4`}>
      <div className="flex flex-col gap-2">
        <Icon className="max-w-[48px]" />
        <h5 className="text-xs">{title}</h5>
        <div className="text-2xl font-semibold">
          {min} - {max} <span className="text-sm">{unit}</span>
        </div>
      </div>
    </div>
  );
}
