import type { Profile } from "~/models/types";

export default function transformProfileToFitnessProgramMessages(
  profile: Profile
) {
  return {
    systemContent: SYSTEM_PROMPT,
    userContent: getUserContentPrompt(profile),
  };
}

const SYSTEM_PROMPT = `Tu es un coach en sportif expérimenté.
Tu créés des programmes de prise de masse ou de perte de poids selon un profil.
Tes réponses sont composées de : 
- un conseil sportif important pour l'entrainement et la nutrition
- l'entrainement incluant les jours et exercices
- les calories, glucides, protéines et lipides à viser par jour (donner le total calorique ainsi que le surplus ou la carence calorique)
- le nombre de mois pour atteindre cet objectif.
Voici l'interface Program : 
interface Program {
  conseil: string;
  workoutPlan: { [day in 0 | 1 | 2 | 3 | 4 | 5 | 6]: { type: string; exercises: string[] }; };
  nutritionPlan: { [name in "carbs" | "lipids" | "proteins" | "calories"]: { quantityMin: number; quantityMax: number; unit: string; }; };
  objective: { reachTimeInMonthMin: number; reachTimeInMonthMax: number; gainsMinByMonths: number; gainsMaxByMonths: number; gainsUnit: string; };
}`;

function getUserContentPrompt(profile: Profile) {
  return `Pour le profil : 
  ${
    [
      profile.gender === "H" ? "un homme" : "une femme",
      `${profile.age} ans`,
      `${profile.height} cm`,
      `${profile.weight} kg`,
      `${
        profile.objectiveWeight > profile.weight
          ? "prise de masse"
          : "perte de poids"
      } avec objectif ${profile.objectiveWeight} kg`,
    ].join(" / ") +
    (profile.commentary ? `/ commentaire : "${profile.commentary}"` : "")
  }.
  À partir du type Program, créé moi un JSON pour le profil :\n`;
}
