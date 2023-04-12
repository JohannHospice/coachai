import { Card } from "~/components/commons/Card";
import { ValueSection } from "../../commons/ValueSection";

export function CardValueSection({
  min,
  max,
  unit,
  title,
  color,
  icon,
}: {
  min: string | number;
  max: string | number;
  unit: string;
  title: string;
  color: string;
  icon?: any;
}) {
  return (
    <Card className={color}>
      <ValueSection
        icon={icon}
        title={title}
        unit={unit}
        value={`${min} - ${max}`}
      />
    </Card>
  );
}
