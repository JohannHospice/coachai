import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { CompleteProgramAccessor } from "../components/program/ProgramResults";
import { Container } from "../components/common/Container";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import { Suspense } from "react";

export function meta() {
  return [{ title: "Vos Résultats Personnalisés - CoachAI" }];
}

export async function loader({ request }: LoaderArgs) {
  const result = new URL(request.url).searchParams.get("program");

  return result ? json(JSON.parse(result)) : null;
}

export default function Index() {
  const program = useLoaderData<ProgramWithProfile>();

  return (
    <Container>
      <div className="flex flex-col gap-8 mb-8 mt-4">
        <Link
          to="/"
          className="flex text-sm hover:text-gray-300 transition-colors"
        >
          <ArrowSmallLeftIcon className="w-5 mr-1" />
          Retour vers la création d'un nouveau programme
        </Link>
        <div>
          <h1 className="text-4xl font-semibold mb-2">
            Votre plan sportif et nutritionnel Personnalisé
          </h1>
          <h2 className="text-xl text-gray-500 max-w-[50rem] ">
            Découvrez votre programme d'entraînement et de nutrition sur mesure,
            conçu pour vous aider à atteindre vos objectifs rapidement et
            efficacement. Suivez votre progression et ajustez votre plan en
            fonction de vos performances pour une expérience véritablement
            personnalisée.
          </h2>
        </div>
        <Suspense>
          <Await resolve={program}>
            <CompleteProgramAccessor />
          </Await>
        </Suspense>
      </div>
    </Container>
  );
}