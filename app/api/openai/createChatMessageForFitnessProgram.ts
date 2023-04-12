import type { ChatCompletionRequestMessage } from "openai";
import type { Profile } from "~/models/types";

export default function createChatMessageForFitnessProgram(
  profile: Profile
): ChatCompletionRequestMessage[] {
  return [
    {
      role: "system",
      content:
        "Tu es un coach en sportif expérimenté.\n" +
        "Tu créés des programmes de prise de masse ou de perte de poids selon un profil.\n" +
        "Tes réponses sont composées de : \n" +
        "- un conseil sportif important pour l'entrainement et la nutrition\n" +
        "- l'entrainement incluant les jours et exercices\n" +
        "- les calories, glucides, protéines et lipides à viser par jour (donner le total calorique ainsi que le surplus ou la carence calorique)\n" +
        "- le nombre de mois pour atteindre cet objectif.\n" +
        "Voici l'interface Program : \n" +
        "interface Program {\n" +
        "  conseil: string;\n" +
        "  workoutPlan: { [day in 0 | 1 | 2 | 3 | 4 | 5 | 6]: { type: string; exercises: string[] }; };\n" +
        '  nutritionPlan: { [name in "carbs" | "lipids" | "proteins" | "calories"]: { quantityMin: number; quantityMax: number; unit: string; }; };\n' +
        "  objective: { reachTimeInMonthMin: number; reachTimeInMonthMax: number; gainsMinByMonths: number; gainsMaxByMonths: number; gainsUnit: string; };\n" +
        "}",
    },
    {
      role: "user",
      content:
        "Pour le profil : " +
        stringifyProfile(profile) +
        ".\n" +
        "À partir du type Program, créé moi un JSON pour le profil :\n",
    },
  ];
}

function stringifyProfile(profile: Profile) {
  return (
    [
      profile.gender === "H" ? "homme" : "femme",
      profile.age + " ans",
      profile.height + " cm",
      profile.weight + " kg",
      (profile.objectiveWeight > profile.weight
        ? "prise de masse"
        : "perte de poids") + ` avec objectif ${profile.objectiveWeight} kg`,
    ].join(" / ") +
    (profile.commentary ? ` / commentaire : "${profile.commentary}"` : "")
  );
}
