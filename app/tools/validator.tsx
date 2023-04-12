import { z } from "zod";

export const Profile = z.object({
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
      120,
      "L'informations complémentaires ne doivent pas dépasser 120 caractères."
    )
    .optional(),
});

const NutritionName = z.enum(["carbs", "lipids", "proteins", "calories"]);

const Program = z.object({
  workoutPlan: z
    .record(
      z.object({
        type: z.string(),
        exercises: z.array(z.string()).optional(),
      })
    )
    .transform((x) => {
      for (let i = 0; i < 7; i++) {
        if (!x[i] || !x[i].exercises?.length || !x[i].type) {
          x[i] = { type: "Repos" };
        }
      }
      return x;
    }),
  nutritionPlan: z.record(
    NutritionName,
    z.object({
      quantityMin: z.number(),
      quantityMax: z.number(),
      unit: z.string(),
    })
  ),
  objective: z.object({
    reachTimeInMonthMin: z.number(),
    reachTimeInMonthMax: z.number(),
    gainsMinByMonths: z.number(),
    gainsMaxByMonths: z.number(),
    gainsUnit: z.string(),
  }),
  conseil: z.string().optional(),
});

const ProgramWithProfile = z.object({
  ...Program.shape,
  profile: Profile,
});

export { ProgramWithProfile };

function preprocessNumberFromString(input: any) {
  const processed = z
    .string()
    .regex(/^\d+$/)
    .transform(Number)
    .safeParse(input);
  return processed.success ? processed.data : input;
}
