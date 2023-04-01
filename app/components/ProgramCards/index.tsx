import { CardDayProgram } from "../CardDayProgram";
import { CardNutritional } from "../CardNutritional";
import { SectionTitle } from "./SectionTitle";
import {
  FireIcon,
  SunIcon,
  MoonIcon,
  StarIcon,
  SparklesIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export function ProgramCards({ program }: { program: Program }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-4">
      <div className="grid gap-6">
        <div className="grid row-span-1 grid-cols-2 gap-6">
          <CardNutritional
            title="Temps estimé"
            min={program.objective.reachTimeInMonthMin}
            max={program.objective.reachTimeInMonthMax}
            unit="mois"
            icon={ClockIcon}
            color="bg-gray-900"
          />
          <CardNutritional
            title="Gains"
            min={program.objective.gainsMinByMonths}
            max={program.objective.gainsMaxByMonths}
            unit={program.objective.gainsUnit + " / mois"}
            icon={SparklesIcon}
            color="bg-gray-900"
          />
          {Object.keys(NUTRITION_PLAN_TRANSFORMER).map((key) => {
            const { quantityMin, quantityMax, unit } =
              program.nutritionPlan[key as NutritionName];
            const { title, color, icon, perDay } =
              NUTRITION_PLAN_TRANSFORMER[key as NutritionName];
            return (
              <CardNutritional
                key={key}
                title={title}
                min={quantityMin}
                max={quantityMax}
                unit={unit + (perDay ? " / jour" : "")}
                icon={icon}
                color={color}
              />
            );
          })}
        </div>
      </div>
      <div className="md:col-start-2 md:row-start-1">
        <div className="p-8 bg-gray-900 rounded-3xl">
          <SectionTitle>Programme hebdomadaire</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.keys(program.workoutPlan).map((key) => (
              <div key={key}>
                <CardDayProgram
                  number={Number(key)}
                  plan={program.workoutPlan[Number(key)]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const NUTRITION_PLAN_TRANSFORMER = {
  calories: {
    title: "Calories",
    color: "text-slate-950 bg-red-200",
    icon: FireIcon,
  },
  proteins: {
    title: "Proteines",
    color: "text-slate-950 bg-blue-200",
    icon: SunIcon,
    perDay: true,
  },
  carbs: {
    title: "Glucides",
    color: "text-slate-950 bg-green-200",
    icon: MoonIcon,
    perDay: true,
  },
  lipids: {
    title: "Lipides",
    color: "text-slate-950 bg-yellow-200",
    icon: StarIcon,
    perDay: true,
  },
} as {
  [key in NutritionName]: {
    title: string;
    color: string;
    icon: any;
    perDay?: boolean;
  };
};
