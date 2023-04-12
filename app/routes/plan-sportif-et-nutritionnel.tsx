import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Await,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { Container } from "../components/common/Container";
import { Suspense } from "react";
import { ProgramAndProfileValidator } from "~/models/validators";
import { FitnessProgramAccessor } from "~/components/program/FitnessProgramAccessor";
import type { ProgramWithProfile } from "~/models/types";
import { ErrorPageContent } from "../components/common/ErrorPageContent";
import { LinkHome } from "~/components/common/LinkHome";
import { Heading } from "~/components/common/Heading";

export function meta() {
  return [
    { title: "Votre plan sportif et nutritionnel personnalisé - CoachAI" },
  ];
}

export async function loader({ request }: LoaderArgs) {
  const fitnessProgramString = new URL(request.url).searchParams.get("program");
  if (!fitnessProgramString) {
    throw json("Aucun programme dans l'url", { status: 502 });
  }

  const fitnessProgram = ProgramAndProfileValidator.safeParse(
    JSON.parse(fitnessProgramString)
  );

  if (!fitnessProgram.success) {
    console.error(fitnessProgram.error.issues);
    throw json("Le programme passé est corrompu.", { status: 501 });
  }

  return json(fitnessProgram.data);
}

export function ErrorBoundary() {
  const error = useRouteError();
  const GLOBAL_MESSAGE =
    "Désolé, mais il nous est impossible de vous afficher le programme généré." +
    " Nous vous conseillons de retenter la création d'un nouveau programme.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 501) {
      return (
        <ErrorPageContent title="Oups... Le programme trouvé est corrompu !">
          {GLOBAL_MESSAGE}
        </ErrorPageContent>
      );
    }
    if (error.status === 502) {
      return (
        <ErrorPageContent title="Oups... Aucun programme trouvé !">
          {GLOBAL_MESSAGE}
        </ErrorPageContent>
      );
    }
  }
  return (
    <ErrorPageContent title="Oups... Une erreur s'est produite !">
      {GLOBAL_MESSAGE}
    </ErrorPageContent>
  );
}

export default function Index() {
  const data = useLoaderData<ProgramWithProfile>();
  return (
    <Container>
      <div className="flex flex-col gap-8 my-8">
        <LinkHome>Retour vers la création d'un nouveau programme</LinkHome>
        <Heading
          title="Votre plan sportif et nutritionnel personnalisé"
          subtitle="Découvrez votre programme d'entraînement et de nutrition sur mesure,
            conçu pour vous aider à atteindre vos objectifs rapidement et
            efficacement. Suivez votre progression et ajustez votre plan en
            fonction de vos performances pour une expérience véritablement
            personnalisée."
        />
        <Suspense>
          <Await resolve={data}>
            <FitnessProgramAccessor />
          </Await>
        </Suspense>
      </div>
    </Container>
  );
}
