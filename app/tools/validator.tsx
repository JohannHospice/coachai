import { z } from "zod";

export const Profile = z
  .object({
    age: z.number().min(0, "L'age doit etre supérieur à 0."),
    gender: z.union([z.literal("H"), z.literal("F")]),
    height: z.number().min(0, "La taille doit etre supérieur à 0."),
    weight: z.number().min(0, "Le poids doit etre supérieur à 0."),
    objectiveWeight: z.number().min(0, "Le poids doit etre supérieur à 0."),
  })
  .required();

const NutritionName = z.enum(["carbs", "lipids", "proteins", "calories"]);

const Program = z.object({
  workoutPlan: z.record(
    z.object({
      type: z.string(),
      exercises: z.array(z.string()),
    })
  ),
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
});

const ProgramWithProfile = z.object({
  ...Program.shape,
  profile: Profile,
});

export { ProgramWithProfile };
