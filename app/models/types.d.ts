import type { z } from "zod";
import type {
  ProfileValidator,
  ProgramValidator,
  ProgramAndProfileValidator,
  NutrimentValidator,
  WorkoutValidator,
  WorkoutValuesValidator,
} from "./validators";

type Profile = z.infer<typeof ProfileValidator>;
type Program = z.infer<typeof ProgramValidator>;
type Workout = z.infer<typeof WorkoutValidator>;
type WorkoutValues = z.infer<typeof WorkoutValuesValidator>;
type ProgramWithProfile = z.infer<typeof ProgramAndProfileValidator>;
type NutritionName = keyof z.infer<typeof NutrimentValidator>;
