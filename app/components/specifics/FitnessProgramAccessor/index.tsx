import { useAsyncValue } from "@remix-run/react";
import { CardValueSection } from "../../cards/CardValueSection";
import { SparklesIcon, ClockIcon } from "@heroicons/react/24/solid";
import { CardProfile } from "../../cards/CardProfile";
import { CardProgram } from "../../cards/CardProgram";
import { NUTRITION_PLAN_TRANSFORMER } from "../../../tools/transformer";
import { Card } from "../../commons/Card";
import { TextSection } from "~/components/commons/TextSection";
import type { NutritionName, ProgramWithProfile } from "~/models/types";

export function FitnessProgramAccessor() {
  const { program, profile } = useAsyncValue() as ProgramWithProfile;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="md:col-span-2">
        <CardProfile profile={profile} />
      </div>
      <div className="md:row-start-2">
        <div className="grid row-span-1 grid-cols-2 gap-6">
          <CardValueSection
            title={
              profile.weight < profile.objectiveWeight ? "Gains" : "Pertes"
            }
            min={program.objective.gainsMinByMonths}
            max={program.objective.gainsMaxByMonths}
            unit={program.objective.gainsUnit + " / mois"}
            icon={SparklesIcon}
            color="bg-gray-900"
          />
          <CardValueSection
            title="Temps estimé"
            min={program.objective.reachTimeInMonthMin}
            max={program.objective.reachTimeInMonthMax}
            unit="mois"
            icon={ClockIcon}
            color="bg-gray-900"
          />
          {Object.keys(NUTRITION_PLAN_TRANSFORMER).map((key) => {
            const { quantityMin, quantityMax, unit } =
              program.nutritionPlan[key as NutritionName];
            const { title, color, icon, perDay } =
              NUTRITION_PLAN_TRANSFORMER[key as NutritionName];
            return (
              <CardValueSection
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
      <div className="md:col-start-2 md:row-start-2">
        <CardProgram workoutPlan={program.workoutPlan} />
        {program.conseil && (
          <Card className="bg-gray-900 mt-6">
            <TextSection title="Conseil">{program.conseil}</TextSection>
          </Card>
        )}
      </div>
    </div>
  );
}
