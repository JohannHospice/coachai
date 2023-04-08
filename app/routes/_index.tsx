import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { createFitnessProgram } from "~/api/openai/program";
import { FormSendProfile } from "../components/program/FormSendProfile";
import { useActionData, useNavigation } from "@remix-run/react";
import { createProfile } from "../tools/createProfile";
import { Container } from "../components/common/Container";
import { Hero } from "../components/program/Hero";
import { Profile } from "../tools/validator";

export function meta() {
  return [{ title: "CoachAI" }];
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const result = Profile.safeParse(createProfile(formData));

  if (result.success) {
    try {
      const fitnessProgram = await createFitnessProgram(result.data);
      return redirect(
        `/plan-sportif-et-nutritionnel?program=${encodeURI(
          JSON.stringify(fitnessProgram)
        )}`
      );
    } catch (error: any) {
      console.error(error);
      return {
        form: "Une erreur s'est produite lors de la connexion à ChatGPT.",
      };
    }
  }

  return result.error.issues.reduce(
    (acc, x) => ({ ...acc, [x.path.join("/")]: x.message }),
    {}
  );
}

export default function Index() {
  const { state } = useNavigation();
  const errors = useActionData<{ [key: string]: string }>();

  return (
    <Container>
      <div className="flex flex-col gap-8 py-8 ">
        <div className="grid grid-cols-1 gap-8 lg:gap-20 md:grid-cols-2">
          <Hero />
          <div>
            <FormSendProfile isLoading={state !== "idle"} errors={errors} />
          </div>
        </div>
      </div>
    </Container>
  );
}
