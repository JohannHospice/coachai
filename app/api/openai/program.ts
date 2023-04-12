import { fetchChat } from "./index";
import { createMessages } from "./prompt";

export async function createFitnessProgram(profile: Profile) {
  const message = createMessages(profile);
  const response = await fetchChat(message);

  console.info({ message, response });

  if (!response) {
    throw new Error("Error with gpt");
  }

  const result = JSON_IN_STRING_REGEX.exec(response);
  if (result && result.length > 0) {
    return {
      ...JSON.parse(result[0]),
      profile,
    };
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

const JSON_IN_STRING_REGEX = /(\{.+?\n\})/s;
