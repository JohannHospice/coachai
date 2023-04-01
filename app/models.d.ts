interface Profile {
  age: number;
  height: number;
  weight: number;
  objectiveWeight: number;
  gender: "H" | "F";
}

interface ProgramPROMPT {
  workoutPlan: { [day: number]: { type: string; exercices: string[] } };
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
}

interface Program {
  workoutPlan: { [day: number]: { type: string; exercices: string[] } };
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
}
type NutritionName = "carbs" | "lipids" | "proteins" | "calories";
