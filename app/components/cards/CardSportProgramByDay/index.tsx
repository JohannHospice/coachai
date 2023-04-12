import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { Bubble } from "../../common/Bubble";
import type { WorkoutValues } from "~/models/types";

export function CardSportProgramByDay({
  number,
  plan,
}: {
  number: number;
  plan: WorkoutValues;
}) {
  const isRest = !plan.exercises || plan.exercises?.length === 0;
  const [open, setOpen] = useState(false);

  return (
    <button
      disabled={isRest}
      onClick={() => setOpen(!open)}
      className="w-full rounded-2xl disabled:opacity-40 text-white  bg-gray-800 enabled:hover:bg-gray-700 transition-colors p-4 text-left"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="text-md">Jour {number + 1}</div>
          <div className="flex gap-1">
            <Bubble>{capitalized(plan.type)}</Bubble>
            {!isRest && <Bubble>{plan.exercises?.length} exercises</Bubble>}
          </div>
        </div>
        <div
          className={
            "h-6 w-6 transition-transform " + (open ? "rotate-180" : "")
          }
        >
          <ChevronUpIcon />
        </div>
      </div>
      <ul className={"pt-4 " + (open ? "" : "hidden")}>
        {plan.exercises?.map((exercice) => (
          <li className="ml-6 list-disc text-sm" key={exercice}>
            {capitalized(exercice)}
          </li>
        ))}
      </ul>
    </button>
  );
}

function capitalized(text: string) {
  return text.at(0)?.toUpperCase() + text.slice(1).toLowerCase();
}
