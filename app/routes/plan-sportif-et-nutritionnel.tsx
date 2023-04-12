import { LoaderArgs, redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Await,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { Container } from "../components/common/Container";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import { Suspense } from "react";
import { ProgramWithProfile } from "~/tools/validator";
import { ProgramAccessor } from "~/components/program/ProgramAccessor";

export function meta() {
  return [
    { title: "Votre plan sportif et nutritionnel personnalisé - CoachAI" },
  ];
}

export async function loader({ request }: LoaderArgs) {
  const result = new URL(request.url).searchParams.get("program");
  if (result) {
    const program = ProgramWithProfile.safeParse(JSON.parse(result));
    if (program.success) {
      console.info(program.data);
      return json(program.data);
    }
    console.error(program.error.issues);
  }

  throw json("Le programme passé est corrompu.", { status: 501 });
}

export function ErrorBoundary() {
  let error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 501) {
    return (
      <Container>
        <h1 className="text-4xl font-semibold mb-2">
          Oups... Le programme est corrompu !
        </h1>
        <h2 className="text-xl text-white/60 max-w-[50rem] mb-2">
          Désolé, mais il nous est impossible de vous afficher le programme
          généré. Nous vous conseillons de retenter la création d'un nouveau
          programme.
        </h2>
        <Link
          to="/"
          className="flex text-sm hover:text-white/50 transition-colors"
        >
          <ArrowSmallLeftIcon className="w-5 mr-1" />
          Tenter une nouvelle recherche
        </Link>
      </Container>
    );
  }
}

export default function Index() {
  const program = useLoaderData<ProgramWithProfile>();

  return (
    <Container>
      <div className="flex flex-col gap-8 my-8">
        <Link
          to="/"
          className="flex text-sm hover:text-white/50 transition-colors"
        >
          <ArrowSmallLeftIcon className="w-5 mr-1" />
          Retour vers la création d'un nouveau programme
        </Link>
        <div>
          <h1 className="text-4xl font-semibold mb-2">
            Votre plan sportif et nutritionnel personnalisé
          </h1>
          <h2 className="text-xl text-white/60 max-w-[50rem] ">
            Découvrez votre programme d'entraînement et de nutrition sur mesure,
            conçu pour vous aider à atteindre vos objectifs rapidement et
            efficacement. Suivez votre progression et ajustez votre plan en
            fonction de vos performances pour une expérience véritablement
            personnalisée.
          </h2>
        </div>
        <Suspense>
          <Await resolve={program}>
            <ProgramAccessor />
          </Await>
        </Suspense>
      </div>
    </Container>
  );
}
