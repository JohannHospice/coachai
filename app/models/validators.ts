import { z } from "zod";

// Profile

export const ProfileValidator = z.object({
  age: z.preprocess(
    preprocessNumberFromString,
    z.number().min(0, "L'age doit etre supérieur à 0.")
  ),
  gender: z.union([z.literal("H"), z.literal("F")]),
  height: z.preprocess(
    preprocessNumberFromString,
    z.number().min(0, "La taille doit etre supérieur à 0.")
  ),
  weight: z.preprocess(
    preprocessNumberFromString,
    z.number().min(0, "Le poids doit etre supérieur à 0.")
  ),
  objectiveWeight: z.preprocess(
    preprocessNumberFromString,
    z.number().min(0, "Le poids doit etre supérieur à 0.")
  ),
  commentary: z
    .string()
    .max(
      210,
      "L'informations complémentaires ne doivent pas dépasser 210 caractères."
    )
    .optional(),
  createdOn: z
    .string()
    .refine((value) => {
      const parsedDate = Date.parse(value);
      return !isNaN(parsedDate);
    }, "Doit être une date valide au format ISO.")
    .optional(),
});

// Program

export const WorkoutValuesValidator = z.object({
  type: z.string(),
  exercises: z.array(z.string()).optional(),
});

export const WorkoutValidator = z
  .record(
    z.preprocess(preprocessNumberFromString, z.number().min(0).max(7)),
    WorkoutValuesValidator
  )
  .transform(function cleanAndFillWorkouts(workout) {
    for (let day = 0; day < 7; day++) {
      if (
        !workout[day] ||
        !workout[day].exercises?.length ||
        !workout[day].type
      ) {
        workout[day] = { type: "Repos" };
      }
    }
    return workout;
  });

export const NutrimentValuesValidator = z.object({
  quantityMin: z.number(),
  quantityMax: z.number(),
  unit: z.string(),
});

export const NutrimentValidator = z.object({
  carbs: NutrimentValuesValidator,
  lipids: NutrimentValuesValidator,
  proteins: NutrimentValuesValidator,
  calories: NutrimentValuesValidator,
});

export const ObjectiveValidator = z.object({
  reachTimeInMonthMin: z.number(),
  reachTimeInMonthMax: z.number(),
  gainsMinByMonths: z.number(),
  gainsMaxByMonths: z.number(),
  gainsUnit: z.string(),
});

export const ProgramValidator = z.object({
  workoutPlan: WorkoutValidator,
  nutritionPlan: NutrimentValidator,
  objective: ObjectiveValidator,
  conseil: z.string().optional(),
});

export const ProgramAndProfileValidator = z.object({
  program: ProgramValidator,
  profile: ProfileValidator,
});

// tools

function preprocessNumberFromString(input: any): number {
  const processed = z
    .string()
    .regex(/^\d+$/)
    .transform(Number)
    .safeParse(input);
  return processed.success ? processed.data : input;
}
