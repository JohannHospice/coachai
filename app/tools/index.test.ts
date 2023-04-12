import { describe, expect, test } from "@jest/globals";
import { parseSpecificJsonObjectFromString } from ".";

describe("parseSpecificJsonObjectFromString", () => {
  test("has found a json element in string", () => {
    EXAMPLES.forEach((exemple) => {
      const object = parseSpecificJsonObjectFromString(exemple);
      console.log(object);

      expect(typeof object).toBe("object");
    });
  });
  test("found nothing", () => {
    expect(() => {
      ["je vais pas me prendre la tete", "pff {", "}"].forEach((exemple) => {
        const object = parseSpecificJsonObjectFromString(exemple);
        console.log(object);

        expect(typeof object).not.toBe("object");
      });
    }).toThrow(Error);
  });
});

const EXAMPLES = [
  `Voici le JSON pour le profil homme de 27 ans, pesant 81kg et mesurant 181cm, avec comme objectif une prise de masse pour atteindre 95kg et pratiquant 2 séances de boxe anglaise :

  \`\`\`
{
  "conseil": "Pour favoriser la prise de masse, il est important de maintenir un apport calorique élevé et de manger des aliments riches en protéines. Soyez régulier dans votre entraînement et dormez suffisamment pour permettre à vos muscles de récupérer.",
  "workoutPlan": {
    "0": { "type": "Boxe anglaise", "exercises": ["Shadow Boxe", "Sac de frappe", "Corde à sauter"] },
    "1": { "type": "Musculation", "exercises": ["Développé couché", "Squat", "Tractions", "Rowing barre", "Curl biceps", "Extension triceps"] },
    "2": { "type": "Repos", "exercises": [] },
    "3": { "type": "Musculation", "exercises": ["Presse à cuisse", "Soulevé de terre", "Dips", "Oiseau", "Abdos"] },
    "4": { "type": "Boxe anglaise", "exercises": ["Sparring", "Pao", "Mitts"] },
    "5": { "type": "Musculation", "exercises": ["Fentes", "Développé militaire", "Tirage poitrine", "Curl concentré", "Extension verticale"] },
    "6": { "type": "Repos", "exercises": [] }
  },
  "nutritionPlan": {
    "carbs": { "quantityMin": 290, "quantityMax": 350, "unit": "g" },
    "lipids": { "quantityMin": 70, "quantityMax": 90, "unit": "g" },
    "proteins": { "quantityMin": 150, "quantityMax": 170, "unit": "g" },
    "calories": { "quantityMin": 3200, "quantityMax": 3600, "unit": "kcal" }
  },
  "objective": {
    "reachTimeInMonthMin": 6,
    "reachTimeInMonthMax": 8,
    "gainsMinByMonths": 1.5,
    "gainsMaxByMonths": 2.5,
    "gainsUnit": "kg"
  }
}
\`\`\`
  `,
  `Voici le JSON pour le profil homme de 27 ans, pesant 81kg et mesurant 181cm, avec comme objectif une prise de masse pour atteindre 95kg et pratiquant 2 séances de boxe anglaise :

\`\`\`
{
  "conseil": "Pour favoriser la prise de masse, il est important de maintenir un apport calorique élevé et de manger des aliments riches en protéines. Soyez régulier dans votre entraînement et dormez suffisamment pour permettre à vos muscles de récupérer.",
  "workoutPlan": {
    "0": { "type": "Boxe anglaise", "exercises": ["Shadow Boxe", "Sac de frappe", "Corde à sauter"] },
    "1": { "type": "Musculation", "exercises": ["Développé couché", "Squat", "Tractions", "Rowing barre", "Curl biceps", "Extension triceps"] },
    "2": { "type": "Repos", "exercises": [] },
    "3": { "type": "Musculation", "exercises": ["Presse à cuisse", "Soulevé de terre", "Dips", "Oiseau", "Abdos"] },
    "4": { "type": "Boxe anglaise", "exercises": ["Sparring", "Pao", "Mitts"] },
    "5": { "type": "Musculation", "exercises": ["Fentes", "Développé militaire", "Tirage poitrine", "Curl concentré", "Extension verticale"] },
    "6": { "type": "Repos", "exercises": [] }
  },
  "nutritionPlan": {
    "carbs": { "quantityMin": 290, "quantityMax": 350, "unit": "g" },
    "lipids": { "quantityMin": 70, "quantityMax": 90, "unit": "g" },
    "proteins": { "quantityMin": 150, "quantityMax": 170, "unit": "g" },
    "calories": { "quantityMin": 3200, "quantityMax": 3600, "unit": "kcal" }
  },
  "objective": {
    "reachTimeInMonthMin": 6,
    "reachTimeInMonthMax": 8,
    "gainsMinByMonths": 1.5,
    "gainsMaxByMonths": 2.5,
    "gainsUnit": "kg"
  }
}}
\`\`\`
  `,
  `
Voici le JSON pour le profil homme de 27 ans, pesant 81kg et mesurant 181cm, avec comme objectif une prise de masse pour atteindre 95kg et pratiquant 2 séances de boxe anglaise :

\`\`\`
{
  "conseil": "Pour favoriser la prise de masse, il est important de maintenir un apport calorique élevé et de manger des aliments riches en protéines. Soyez régulier dans votre entraînement et dormez suffisamment pour permettre à vos muscles de récupérer.",
  "workoutPlan": {
    "0": { "type": "Boxe anglaise", "exercises": ["Shadow Boxe", "Sac de frappe", "Corde à sauter"] },
    "1": { "type": "Musculation", "exercises": ["Développé couché", "Squat", "Tractions", "Rowing barre", "Curl biceps", "Extension triceps"] },
    "2": { "type": "Repos", "exercises": [] },
    "3": { "type": "Musculation", "exercises": ["Presse à cuisse", "Soulevé de terre", "Dips", "Oiseau", "Abdos"] },
    "4": { "type": "Boxe anglaise", "exercises": ["Sparring", "Pao", "Mitts"] },
    "5": { "type": "Musculation", "exercises": ["Fentes", "Développé militaire", "Tirage poitrine", "Curl concentré", "Extension verticale"] },
    "6": { "type": "Repos", "exercises": [] }
  },
  "nutritionPlan": {
    "carbs": { "quantityMin": 290, "quantityMax": 350, "unit": "g" },
    "lipids": { "quantityMin": 70, "quantityMax": 90, "unit": "g" },
    "proteins": { "quantityMin": 150, "quantityMax": 170, "unit": "g" },
    "calories": { "quantityMin": 3200, "quantityMax": 3600, "unit": "kcal" }
  },
  "objective": {
    "reachTimeInMonthMin": 6,
    "reachTimeInMonthMax": 8,
    "gainsMinByMonths": 1.5,
    "gainsMaxByMonths": 2.5,
    "gainsUnit": "kg"
  }
}
\`\`\`
Voici le JSON pour le profil homme de 27 ans, pesant 81kg et mesurant 181cm, avec comme objectif une prise de masse pour atteindre 95kg et pratiquant 2 séances de boxe anglaise :
Voici le JSON pour le profil homme de 27 ans, pesant 81kg et mesurant 181cm, avec comme objectif une prise de masse pour atteindre 95kg et pratiquant 2 séances de boxe anglaise :
  `,
];
