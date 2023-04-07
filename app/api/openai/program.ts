import { fetchChat } from "./index";
import { createMessages } from "./prompt";

export async function createFitnessProgram(profile: Profile) {
  const response = await fetchChat(createMessages(profile));
  console.log(response);

  if (!response) {
    throw new Error("Error with gpt");
  }
  return {
    ...JSON.parse(
      substringIfNeeded(response, "```")
        .replace(/\\n/g, "")
        .replace("JSON", "")
        .replace("json", "")
    ),
    profile,
  } as ProgramWithProfile;
}

// Sometime the json response is between ```
function substringIfNeeded(response: string, separator: string) {
  const splited = response.split(separator);
  if (splited.length > 2) {
    return splited[1];
  }
  return response;
}
