import { z } from "zod";

export const Profile = z
  .object({
    age: z.number().min(0, "L'age doit etre supérieur à 0."),
    gender: z.enum(["H", "F"]),
    height: z.number().min(0, "La taille doit etre supérieur à 0."),
    weight: z.number().min(0, "Le poids doit etre supérieur à 0."),
    objectiveWeight: z.number().min(0, "Le poids doit etre supérieur à 0."),
  })
  .required();
