import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { createFitnessProgram } from "~/api/openai/program";
import { FormCreateProgram } from "../components/FormCreateProgram";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { ProgramCards } from "../components/ProgramCards";
import { createProfile } from "../tools/createProfile";
import { Container } from "../components/Container";

export function meta() {
  return [{ title: "Coach" }];
}

export async function action({ request }: ActionArgs) {
  const body = await request.formData();

  const openAIResponse = await createFitnessProgram(createProfile(body));
  return redirect(`?res=${encodeURI(JSON.stringify(openAIResponse))}`);
}

export async function loader({ request }: LoaderArgs) {
  const result = new URL(request.url).searchParams.get("res");
  if (result) return json(JSON.parse(result));
  return null;
}

export default function Index() {
  const data = useLoaderData<Program>();
  const { state } = useNavigation();

  const isLoading = state !== "idle";
  const isProgramGenerated = data != null;

  return (
    <>
      <div className="sticky top-0 ">
        <div className="py-8 relative after:absolute after:inset-0 after:backdrop-blur-sm after:mask-gradient after:-z-10">
          <Container>
            <FormCreateProgram />
          </Container>
        </div>
      </div>
      <Container>
        <div className="flex flex-col gap-4">
          {isLoading
            ? "loading"
            : isProgramGenerated && <ProgramCards program={data} />}
        </div>
      </Container>
    </>
  );
}
