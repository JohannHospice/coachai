import { Card } from "~/components/common/Card";
import { ValueSection } from "../../common/ValueSection";

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
    <Card color={color}>
      <ValueSection
        icon={icon}
        title={title}
        unit={unit}
        value={`${min} - ${max}`}
      />
    </Card>
  );
}
