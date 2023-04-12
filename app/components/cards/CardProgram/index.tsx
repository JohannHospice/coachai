import { Card } from "~/components/commons/Card";
import type { Workout } from "~/models/types";
import { CardSportProgramByDay } from "../CardSportProgramByDay";

export function CardProgram({ workoutPlan }: { workoutPlan: Workout }) {
  return (
    <Card className="bg-gray-900">
      <h4 className="text-2xl mb-6">Programme sportif hebdomadaire</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Object.keys(workoutPlan).map((key) => (
          <div key={key}>
            <CardSportProgramByDay
              number={Number(key)}
              plan={workoutPlan[Number(key)]}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
