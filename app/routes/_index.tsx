import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { createFitness } from "~/api/openai/createFitness";
import { FormProfile } from "../components/specifics/FormProfile";
import { useActionData, useNavigation } from "@remix-run/react";
import { Container } from "../components/commons/Container";
import { HeroHomePage } from "../components/specifics/HeroHomePage";
import { ProfileValidator } from "../models/validators";
import { SuspenseLoader } from "../components/commons/SuspenseLoader";
import { PROGRAMS } from "../models/LAST_REQUESTS";
import { ProfileCard } from "../components/cards/ProfileCard";
import ListWithHorizontalScroll from "../components/commons/ListWithHorizontalScroll";
import { Profile } from "~/models/types";

const DISABLED = true;
export function meta() {
  return [{ title: "CoachAI" }];
}

export async function action({ request }: ActionArgs) {
  if (DISABLED) {
    function randomDateInRange(start: Date, end: Date) {
      const diffTime = end.getTime() - start.getTime();
      const randomTime = Math.random() * diffTime;
      const date = new Date(start.getTime() + randomTime);
      return date.toISOString();
    }

    const today = new Date();
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(today.getMonth() - 2);

    const profiles = [
      {
        age: 25,
        gender: "H",
        height: 180,
        weight: 130,
        objectiveWeight: 90,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary:
          "Je fais du MMA et me prépare pour mon prochain combat dans 4 mois.",
      },
      {
        age: 40,
        gender: "F",
        height: 165,
        weight: 95,
        objectiveWeight: 70,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary:
          "Je m'intéresse au yoga et à la natation pour améliorer ma condition physique. J'ai toujours été en surpoids et j'aimerais vraiment adopter un mode de vie plus sain.",
      },
      {
        age: 35,
        gender: "H",
        height: 175,
        weight: 65,
        objectiveWeight: 80,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary:
          "Je suis prêt à suivre un programme de musculation et à adapter mon régime alimentaire pour atteindre mon objectif. Je suis plutôt mince et j'aimerais gagner en masse musculaire.",
      },
      {
        age: 45,
        gender: "F",
        height: 160,
        weight: 110,
        objectiveWeight: 75,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary:
          "J'aimerais essayer la danse et le Pilates, mais je ne pratique pas de sport actuellement. Je souhaite perdre du poids pour me sentir mieux dans ma peau.",
      },
      {
        age: 23,
        gender: "H",
        height: 190,
        weight: 145,
        objectiveWeight: 100,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary:
          "Je suis intéressé par les sports d'équipe comme le football et le basket pour me motiver.",
      },
      {
        age: 55,
        gender: "F",
        height: 155,
        weight: 50,
        objectiveWeight: 60,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary: "Je pratique 1 cours de Judo par semaine",
      },
      {
        age: 29,
        gender: "H",
        height: 185,
        weight: 60,
        objectiveWeight: 80,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary:
          "Je suis prêt à commencer un programme de musculation et à suivre un régime riche en protéines.",
      },
      {
        age: 50,
        gender: "F",
        height: 170,
        weight: 120,
        objectiveWeight: 85,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary:
          "J'aime marcher, mais j'aimerais essayer d'autres activités comme le vélo ou la natation.",
      },
      {
        age: 33,
        gender: "H",
        height: 175,
        weight: 80,
        objectiveWeight: 70,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary:
          "Je souhaite perdre du poids et tonifier mon corps. Je pratique déjà la course à pied, mais je suis intéressé par d'autres activités sportives et un programme nutritionnel adapté pour atteindre mon objectif.",
      },
      {
        age: 60,
        gender: "F",
        height: 162,
        weight: 100,
        objectiveWeight: 70,
        createdOn: randomDateInRange(twoMonthsAgo, today),
        commentary:
          "Je suis ouverte à des activités douces comme le yoga ou la gymnastique aquatique.",
      },
    ] as Profile[];
    const data = await Promise.all(profiles.map((p) => createFitness(p)));
    console.log(data);

    return {
      form: "Désolé, le service actuellement indisponible. Veuillez réessayer plus tard...",
      data: data,
    };
  }

  const formDataObject = Object.fromEntries(await request.formData());
  console.log(formDataObject);

  const profile = ProfileValidator.safeParse(formDataObject);

  if (!profile.success) {
    console.error(profile.error.issues);
    return profile.error.issues.reduce(
      (acc, x) => ({ ...acc, [x.path.join("/")]: x.message }),
      {}
    );
  }

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

export default function Index() {
  const { state } = useNavigation();
  const errors = useActionData<{ [key: string]: string }>();
  const loading = state !== "idle";
  console.log(errors);

  return (
    <Container>
      <SuspenseLoader loading={loading}>
        <div className="grid grid-cols-1 gap-8 lg:gap-20 md:grid-cols-2 py-24">
          <HeroHomePage />
          <FormProfile loading={loading} errors={errors} disabled={DISABLED} />
        </div>
      </SuspenseLoader>
      <div className="mt-24 mb-48">
        <div className="text-4xl mb-12">Découvrez les dernières réussites</div>
        <ListWithHorizontalScroll>
          {PROGRAMS.map((program, i) => (
            <ProfileCard key={i} program={program} />
          ))}
        </ListWithHorizontalScroll>
      </div>
    </Container>
  );
}
