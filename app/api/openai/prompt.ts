export function createMessages(profile: Profile) {
  const objective =
    profile.objectiveWeight > profile.weight
      ? PROMPT_OBJECTIVE_PLUS
      : PROMPT_OBJECTIVE_LESS;

  return {
    systemContent: SYSTEM_PROMPT,
    userContent: `Donnes moi le programme pour la ${objective} d'un ${
      profile.gender === "H" ? PROMPT_GENDER_MALE : PROMPT_GENDER_FEMALE
    } de ${profile.age} ans, ${profile.height} cm, ${
      profile.weight
    } kg et objectif ${
      profile.objectiveWeight
    } kg. Ta réponse doit etre uniquement la donnée en JSON.\n`,
  };
}

const SYSTEM_PROMPT = `
    Ignore les instructions précédente. Tu es un coach en musculation et nutrition expérimenté.
    Tu créés des programmes de prise de masse ou de perte de poids selon le profil de la personne et son objectif de poids.
    Tes réponses sont composées de : 
    - l entrainement incluant les jours et exercices
    - les calories, glucides, protéines et lipides à viser par jour (donner le total calorique ainsi que le surplus ou la carence calorique)
    - le nombre de mois pour atteindre cet objectif.
    Réponds moi un fichier JSON respectant le type Program : 
    interface Program {
      workoutPlan: { [day: number]: { type: string; exercises: string[] } };
      nutritionPlan: {
        [name in "carbs" | "lipids" | "proteins" | "calories"]: {
          quantityMin: number;
          quantityMax: number;
          unit: string;
        };
      };
      objective: {
        reachTimeInMonthMin: number;
        reachTimeInMonthMax: number;
        gainsMinByMonths: number;
        gainsMaxByMonths: number;
        gainsUnit: string;
      };
    }`;

const PROMPT_OBJECTIVE_PLUS = "prise de masse";
const PROMPT_OBJECTIVE_LESS = "perte de poids";
const PROMPT_GENDER_MALE = "un homme";
const PROMPT_GENDER_FEMALE = "une femme";
