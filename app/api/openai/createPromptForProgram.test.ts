import { describe, expect, test } from "@jest/globals";
import createChatMessageForFitnessProgram from "./createPromptForProgram";

describe("openai", () => {
  test("createChatMessageForFitnessProgram", () => {
    const messages = createChatMessageForFitnessProgram({
      age: 27,
      gender: "H",
      height: 181,
      objectiveWeight: 95,
      weight: 81,
    });

    expect(messages).toHaveLength(2);
    expect(typeof messages[0].content).toBe("string");
    expect(typeof messages[1].content).toBe("string");
    expect(messages[0].role).toBe("system");
    expect(messages[1].role).toBe("user");

    console.log(messages[0].content + "\n" + messages[1].content);
  });
});
