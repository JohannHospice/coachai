import {
  FireIcon,
  SunIcon,
  MoonIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import type { NutritionName } from "~/models/types";

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
