export function ProgramUnitSection({
  min,
  max,
  unit,
  title,
}: {
  min: string | number;
  max: string | number;
  unit: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl bg-gray-800 p-4">
      <h5 className="text-xs">{title}</h5>
      <div className="text-2xl">
        {min} - {max} {unit}
      </div>
    </div>
  );
}
