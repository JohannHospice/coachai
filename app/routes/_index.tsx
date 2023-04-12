import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { createFitness } from "~/api/openai/createFitness";
import { FormProfile } from "../components/program/FormProfile";
import { useActionData, useNavigation } from "@remix-run/react";
import { Container } from "../components/common/Container";
import { HeroHomePage } from "../components/program/HeroHomePage";
import { ProfileValidator } from "../models/validators";
import { SuspenseLoader } from "../components/common/SuspenseLoader";

export function meta() {
  return [{ title: "CoachAI" }];
}

export async function action({ request }: ActionArgs) {
  const formDataObject = Object.fromEntries(await request.formData());
  console.log(formDataObject);

  const profile = ProfileValidator.safeParse(formDataObject);

  if (profile.success) {
    try {
      const fitnessProgram = await createFitness(profile.data);
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

  console.error(profile.error.issues);
  return profile.error.issues.reduce(
    (acc, x) => ({ ...acc, [x.path.join("/")]: x.message }),
    {}
  );
}

export default function Index() {
  const { state } = useNavigation();
  const errors = useActionData<{ [key: string]: string }>();
  const loading = state !== "idle";

  return (
    <Container>
      <SuspenseLoader loading={loading}>
        <div className="grid grid-cols-1 gap-8 py-8 lg:gap-20 md:grid-cols-2">
          <HeroHomePage />
          <FormProfile loading={loading} errors={errors} />
        </div>
      </SuspenseLoader>
    </Container>
  );
}
