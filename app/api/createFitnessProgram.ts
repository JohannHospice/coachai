import { ProgramValidator } from "~/models/validators";
import { fetchChat } from "./openai/index";
import transformProfileToFitnessProgramMessages from "./openai/transformProfileToFitnessProgramMessages";
import type { Profile, ProgramWithProfile } from "~/models/types";
import { parseJSONFromString } from "../tools/parseJSONFromString";

export default async function createFitnessProgram(
  profile: Profile
): Promise<ProgramWithProfile> {
  const message = transformProfileToFitnessProgramMessages(profile);
  const response = await fetchChat(message);

  console.info({ message, response });

  const program = ProgramValidator.safeParse(parseJSONFromString(response));

  if (!program.success) {
    throw new Error(program.error.message);
  }

  return {
    program: program.data,
    profile,
  };
}
