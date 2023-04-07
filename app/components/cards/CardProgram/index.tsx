import { CardSportProgramByDay } from "../CardSportProgramByDay";
import { Card } from "~/components/common/Card";

export function CardProgram({
  workoutPlan,
}: {
  workoutPlan: Program["workoutPlan"];
}) {
  return (
    <Card color="bg-gray-900">
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
