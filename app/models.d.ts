interface Profile {
  age: number;
  height: number;
  weight: number;
  objectiveWeight: number;
  gender: "H" | "F";
  commentary?: string;
}

interface ProgramForPROMPT {
  workoutPlan: {
    [day in 0 | 1 | 2 | 3 | 4 | 5 | 6]: { type: string; exercises: string[] };
  };
  nutritionPlan: {
    [name in "carbs" | "lipids" | "proteins" | "calories"]: {
      quantityMin: number;
      quantityMax: number;
      unit: string;
    };
  };
  objective: {
    reachTimeInMonthMin: number;
    reachTimeInMonthMax: number;
    gainsMinByMonths: number;
    gainsMaxByMonths: number;
    gainsUnit: string;
  };
  conseil: string;
}

interface Program {
  workoutPlan: {
    [day: number]: { type: string; exercises: string[] };
  };
  nutritionPlan: {
    [name in NutritionName]: {
      quantityMin: number;
      quantityMax: number;
      unit: string;
    };
  };
  objective: {
    reachTimeInMonthMin: number;
    reachTimeInMonthMax: number;
    gainsMinByMonths: number;
    gainsMaxByMonths: number;
    gainsUnit: string;
  };
  conseil?: string;
}
type NutritionName = "carbs" | "lipids" | "proteins" | "calories";

type ProgramWithProfile = Program & { profile: Profile };
