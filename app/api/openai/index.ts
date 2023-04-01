import { Configuration, OpenAIApi } from "openai";

export const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

export async function fetchChat({
  userContent,
  systemContent,
}: {
  userContent: string;
  systemContent: string;
}) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemContent },
      { role: "user", content: userContent },
    ],
  });
  return completion.data.choices[0].message?.content;
}
