import { ProgramValidator } from "~/models/validators";
import { fetchChat } from "./index";
import createChatMessageForFitnessProgram from "./createChatMessageForFitnessProgram";
import type { Profile, ProgramWithProfile } from "~/models/types";
import { parseSpecificJsonObjectFromString } from "../../tools/parseSpecificJsonObjectFromString";

export async function createFitness(
  profile: Profile
): Promise<ProgramWithProfile> {
  const messages = createChatMessageForFitnessProgram(profile);
  const response = await fetchChat(messages);

  console.info({ messages, response });

  const program = ProgramValidator.safeParse(
    parseSpecificJsonObjectFromString(response)
  );

  if (!program.success) {
    throw new Error(program.error.message);
  }

  return {
    program: program.data,
    profile,
  };
}
