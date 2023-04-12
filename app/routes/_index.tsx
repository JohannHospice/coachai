import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { createFitnessProgram } from "~/api/openai/program";
import { FormSendProfile } from "../components/program/FormSendProfile";
import { useActionData, useNavigation } from "@remix-run/react";
import { Container } from "../components/common/Container";
import { Hero } from "../components/program/Hero";
import { Profile } from "../tools/validator";

export function meta() {
  return [{ title: "CoachAI" }];
}

export async function action({ request }: ActionArgs) {
  const submissionData = Object.fromEntries(await request.formData());
  console.log(submissionData);

  const zodProfile = Profile.safeParse(submissionData);

  if (zodProfile.success) {
    try {
      const fitnessProgram = await createFitnessProgram(zodProfile.data);
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

  console.error(zodProfile.error.issues);

  return zodProfile.error.issues.reduce(
    (acc, x) => ({ ...acc, [x.path.join("/")]: x.message }),
    {}
  );
}

export default function Index() {
  const { state } = useNavigation();
  const errors = useActionData<{ [key: string]: string }>();

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 py-8 lg:gap-20 md:grid-cols-2">
        <Hero />
        <FormSendProfile isLoading={state !== "idle"} errors={errors} />
      </div>
    </Container>
  );
}
