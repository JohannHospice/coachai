import type { ChatCompletionRequestMessage } from "openai";
import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

export async function fetchChat(messages: ChatCompletionRequestMessage[]) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });
  const content = completion.data.choices[0].message?.content;

  if (!content) throw new Error("No content in gpt response");

  return content;
}
