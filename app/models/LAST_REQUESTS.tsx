import type { ProgramWithProfile } from "./types";

export const PROGRAMS: ProgramWithProfile[] = shuffleArray([
  {
    program: {
      workoutPlan: {
        "0": {
          type: "Boxe anglaise",
          exercises: ["Shadow Boxe", "Sac de frappe", "Corde à sauter"],
        },
        "1": {
          type: "Musculation",
          exercises: [
            "Développé couché",
            "Squat",
            "Tractions",
            "Rowing barre",
            "Curl biceps",
            "Extension triceps",
          ],
        },
        "2": { type: "Repos" },
        "3": {
          type: "Musculation",
          exercises: [
            "Presse à cuisse",
            "Soulevé de terre",
            "Dips",
            "Oiseau",
            "Abdos",
          ],
        },
        "4": { type: "Boxe anglaise", exercises: ["Sparring", "Pao", "Mitts"] },
        "5": {
          type: "Musculation",
          exercises: [
            "Fentes",
            "Développé militaire",
            "Tirage poitrine",
            "Curl concentré",
            "Extension verticale",
          ],
        },
        "6": { type: "Repos" },
      },
      nutritionPlan: {
        carbs: { quantityMin: 290, quantityMax: 350, unit: "g" },
        lipids: { quantityMin: 70, quantityMax: 90, unit: "g" },
        proteins: { quantityMin: 150, quantityMax: 170, unit: "g" },
        calories: { quantityMin: 3200, quantityMax: 3600, unit: "kcal" },
      },
      objective: {
        reachTimeInMonthMin: 6,
        reachTimeInMonthMax: 8,
        gainsMinByMonths: 1.5,
        gainsMaxByMonths: 2.5,
        gainsUnit: "kg",
      },
      conseil:
        "Pour favoriser la prise de masse, il est important de maintenir un apport calorique élevé et de manger des aliments riches en protéines. Soyez régulier dans votre entraînement et dormez suffisamment pour permettre à vos muscles de récupérer.",
    },
    profile: {
      createdOn: "2023-04-24T21:23:35.930Z",
      age: 27,
      gender: "H",
      height: 181,
      weight: 81,
      objectiveWeight: 95,
      commentary: "2 séances de boxe anglaise.",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "cardio",
          exercises: [
            "30 minutes de course à pied",
            "10 minutes de corde à sauter",
          ],
        },
        "1": {
          type: "muscu",
          exercises: [
            "3x10 développé couché",
            "3x10 tractions",
            "3x10 dips",
            "3x10 développé militaire",
            "3x10 curls biceps",
          ],
        },
        "2": {
          type: "cardio",
          exercises: [
            "30 minutes de vélo elliptique",
            "10 minutes de boxe sur sac",
          ],
        },
        "3": {
          type: "muscu",
          exercises: [
            "3x10 soulevé de terre",
            "3x10 fentes avec haltères",
            "3x10 crunchs",
            "3x10 gainage planche",
          ],
        },
        "4": {
          type: "cardio",
          exercises: ["30 minutes de natation", "10 minutes de sauts groupés"],
        },
        "5": {
          type: "muscu",
          exercises: [
            "3x10 squat",
            "3x10 leg press",
            "3x10 extension de jambes",
            "3x10 élévation latérale",
            "3x10 barre au front",
          ],
        },
        "6": {
          type: "Repos",
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 135,
          quantityMax: 225,
          unit: "g",
        },
        lipids: {
          quantityMin: 48,
          quantityMax: 79,
          unit: "g",
        },
        proteins: {
          quantityMin: 173,
          quantityMax: 217,
          unit: "g",
        },
        calories: {
          quantityMin: 1800,
          quantityMax: 2000,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 4,
        reachTimeInMonthMax: 4,
        gainsMinByMonths: 10,
        gainsMaxByMonths: 15,
        gainsUnit: "kg",
      },
      conseil:
        "Pour perdre du poids efficacement, il est important de combiner une alimentation saine et équilibrée avec des séances d'entraînement cardio et de renforcement musculaire.",
    },
    profile: {
      age: 25,
      gender: "H",
      height: 180,
      weight: 130,
      objectiveWeight: 90,
      createdOn: "2023-04-08T15:05:12.677Z",
      commentary:
        "Je fais du MMA et me prépare pour mon prochain combat dans 4 mois.",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "Résistance",
          exercises: [
            "Développé couché",
            "Squat",
            "Tirage vertical",
            "Soulevé de terre",
          ],
        },
        "1": {
          type: "Natation",
          exercises: ["Nage libre", "Brasse"],
        },
        "2": {
          type: "Yoga",
          exercises: [
            "Salutation au soleil",
            "Posture de la planche",
            "Posture de la grenouille",
            "Posture de l'arbre",
          ],
        },
        "3": {
          type: "Résistance",
          exercises: [
            "Presse à jambes",
            "Tractions",
            "Curl biceps",
            "Extension triceps",
          ],
        },
        "4": {
          type: "Natation",
          exercises: ["Nage libre", "4 nages"],
        },
        "5": {
          type: "Yoga",
          exercises: [
            "Posture du chien tête en bas",
            "Posture de la déesse",
            "Posture du cobra",
            "Posture de l'aigle",
          ],
        },
        "6": {
          type: "Repos",
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 120,
          quantityMax: 150,
          unit: "g",
        },
        lipids: {
          quantityMin: 50,
          quantityMax: 70,
          unit: "g",
        },
        proteins: {
          quantityMin: 120,
          quantityMax: 150,
          unit: "g",
        },
        calories: {
          quantityMin: 1500,
          quantityMax: 1800,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 6,
        reachTimeInMonthMax: 10,
        gainsMinByMonths: 2,
        gainsMaxByMonths: 3,
        gainsUnit: "kg",
      },
      conseil:
        "Le yoga et la natation sont d'excellentes activités pour améliorer la condition physique, mais pour perdre du poids, il faut ajouter un programme d'entraînement en résistance (ou musculation) afin d'augmenter la masse musculaire et donc le métabolisme de repos. Il est également important de limiter les aliments transformés riches en calories vides.",
    },
    profile: {
      age: 40,
      gender: "F",
      height: 165,
      weight: 95,
      objectiveWeight: 70,
      createdOn: "2023-04-29T21:15:16.421Z",
      commentary:
        "Je m'intéresse au yoga et à la natation pour améliorer ma condition physique. J'ai toujours été en surpoids et j'aimerais vraiment adopter un mode de vie plus sain.",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "Repos",
        },
        "1": {
          type: "haut du corps",
          exercises: [
            "Développé couché",
            "Tirage vertical",
            "Développé militaire",
            "Curl biceps",
            "Extension triceps",
          ],
        },
        "2": {
          type: "bas du corps",
          exercises: ["Squat", "Fentes", "Soulevé de terre", "Mollets debout"],
        },
        "3": {
          type: "Repos",
        },
        "4": {
          type: "haut du corps",
          exercises: [
            "Développé incliné",
            "Rowing barre",
            "Élévations latérales",
            "Curl marteau",
            "Extension nuque",
          ],
        },
        "5": {
          type: "bas du corps",
          exercises: [
            "Presse à cuisses",
            "Squat bulgare",
            "Soulevé de terre roumain",
            "Mollets assis",
          ],
        },
        "6": {
          type: "Repos",
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 325,
          quantityMax: 406,
          unit: "g",
        },
        lipids: {
          quantityMin: 58,
          quantityMax: 91,
          unit: "g",
        },
        proteins: {
          quantityMin: 146,
          quantityMax: 183,
          unit: "g",
        },
        calories: {
          quantityMin: 2700,
          quantityMax: 3375,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 6,
        reachTimeInMonthMax: 8,
        gainsMinByMonths: 1.25,
        gainsMaxByMonths: 1.67,
        gainsUnit: "kg",
      },
      conseil:
        "Il est important de consommer suffisamment de protéines pour favoriser la prise de masse musculaire. Veillez également à inclure des glucides complexes pour un apport énergétique optimal.",
    },
    profile: {
      age: 35,
      gender: "H",
      height: 175,
      weight: 65,
      objectiveWeight: 80,
      createdOn: "2023-04-18T14:49:49.827Z",
      commentary:
        "Je suis prêt à suivre un programme de musculation et à adapter mon régime alimentaire pour atteindre mon objectif. Je suis plutôt mince et j'aimerais gagner en masse musculaire.",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "Cardio",
          exercises: ["30 minutes de marche rapide"],
        },
        "1": {
          type: "Renforcement musculaire",
          exercises: ["Renegade Rows", "Squats", "Push-ups"],
        },
        "2": {
          type: "Cardio",
          exercises: ["30 minutes de vélo elliptique"],
        },
        "3": {
          type: "Renforcement musculaire",
          exercises: ["Deadlifts", "Bench press", "Lat pulldowns"],
        },
        "4": {
          type: "Cardio",
          exercises: ["30 minutes de natation"],
        },
        "5": {
          type: "Renforcement musculaire",
          exercises: ["Overhead press", "Bicep curls", "Tricep extensions"],
        },
        "6": {
          type: "Jour de repos",
          exercises: ["Repos"],
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 90,
          quantityMax: 150,
          unit: "g",
        },
        lipids: {
          quantityMin: 50,
          quantityMax: 90,
          unit: "g",
        },
        proteins: {
          quantityMin: 120,
          quantityMax: 150,
          unit: "g",
        },
        calories: {
          quantityMin: 1600,
          quantityMax: 2000,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 8,
        reachTimeInMonthMax: 12,
        gainsMinByMonths: 3,
        gainsMaxByMonths: 5,
        gainsUnit: "kg",
      },
      conseil:
        "Commencez lentement avec des séances d'entraînement légères qui associent cardio et renforcement musculaire. Essayez la danse ou le Pilates pour commencer.",
    },
    profile: {
      age: 45,
      gender: "F",
      height: 160,
      weight: 110,
      objectiveWeight: 75,
      createdOn: "2023-03-31T15:11:12.542Z",
      commentary:
        "J'aimerais essayer la danse et le Pilates, mais je ne pratique pas de sport actuellement. Je souhaite perdre du poids pour me sentir mieux dans ma peau.",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "cardio",
          exercises: ["Course à pied", "Vélo elliptique", "Rameur"],
        },
        "1": {
          type: "muscu",
          exercises: ["Squat", "Développé couché", "Tirage vertical"],
        },
        "2": {
          type: "cardio",
          exercises: ["Natation", "Jumping jacks", "Corde à sauter"],
        },
        "3": {
          type: "Repos",
        },
        "4": {
          type: "cardio",
          exercises: ["Marche rapide", "Stepper", "Boxe"],
        },
        "5": {
          type: "muscu",
          exercises: ["Soulevé de terre", "Développé militaire", "Curl biceps"],
        },
        "6": {
          type: "Repos",
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 217,
          quantityMax: 322,
          unit: "g",
        },
        lipids: {
          quantityMin: 51,
          quantityMax: 93,
          unit: "g",
        },
        proteins: {
          quantityMin: 178,
          quantityMax: 261,
          unit: "g",
        },
        calories: {
          quantityMin: 2000,
          quantityMax: 2800,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 10,
        reachTimeInMonthMax: 12,
        gainsMinByMonths: 4,
        gainsMaxByMonths: 6,
        gainsUnit: "kg",
      },
      conseil:
        "Pour perdre du poids, il est important de combiner exercices cardiovasculaires et musculation. Les sports d'équipe peuvent être motivants, mais n'oubliez pas d'ajouter également des séances de sport individuelles.",
    },
    profile: {
      age: 23,
      gender: "H",
      height: 190,
      weight: 145,
      objectiveWeight: 100,
      createdOn: "2023-05-05T19:32:10.853Z",
      commentary:
        "Je suis intéressé par les sports d'équipe comme le football et le basket pour me motiver.",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "Muscu",
          exercises: ["Squats", "Fentes", "Presse à cuisses", "Leg curl"],
        },
        "1": {
          type: "Muscu",
          exercises: [
            "Développé couché",
            "Développé incliné haltères",
            "Pull-over",
            "Triceps extensions",
          ],
        },
        "2": {
          type: "Cardio",
          exercises: ["Course à pied", "Cyclisme", "Rameur", "Elliptique"],
        },
        "3": {
          type: "Muscu",
          exercises: [
            "Tirage horizontal",
            "Tirage poulie haute",
            "Rowing barre",
            "Biceps curl",
          ],
        },
        "4": {
          type: "Repos",
        },
        "5": {
          type: "Muscu",
          exercises: ["Soulevé de terre", "Hip thrust", "Calf raises", "Abdos"],
        },
        "6": {
          type: "Cardio",
          exercises: ["Natation", "Saut à la corde", "Escalade", "Boxe"],
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 168,
          quantityMax: 240,
          unit: "g",
        },
        lipids: {
          quantityMin: 45,
          quantityMax: 75,
          unit: "g",
        },
        proteins: {
          quantityMin: 120,
          quantityMax: 170,
          unit: "g",
        },
        calories: {
          quantityMin: 1944,
          quantityMax: 2784,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 6,
        reachTimeInMonthMax: 12,
        gainsMinByMonths: 1,
        gainsMaxByMonths: 2,
        gainsUnit: "kg",
      },
      conseil:
        "Pour augmenter la masse musculaire, il est important d'avoir un apport calorique supérieur aux besoins de base et de pratiquer régulièrement des exercices de musculation.",
    },
    profile: {
      age: 55,
      gender: "F",
      height: 155,
      weight: 50,
      objectiveWeight: 60,
      createdOn: "2023-05-07T10:05:34.488Z",
      commentary: "Je pratique 1 cours de Judo par semaine",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "Jambes",
          exercises: ["Squats", "Extensions de jambes", "Fentes"],
        },
        "1": {
          type: "Pectoraux et Triceps",
          exercises: [
            "Développé couché",
            "Développé incliné avec haltères",
            "Extensions de triceps à la poulie",
          ],
        },
        "2": {
          type: "Dos et Biceps",
          exercises: [
            "Rowing à la barre",
            "Tirage horizontal à la poulie",
            "Curl avec haltères",
          ],
        },
        "3": {
          type: "Epaules et Trapèzes",
          exercises: ["Développé militaire", "Elevations latérales", "Shrugs"],
        },
        "4": {
          type: "Jambes",
          exercises: [
            "Deadlift",
            "Presse à cuisses",
            "Soulevé de terre roumain",
          ],
        },
        "5": {
          type: "Pectoraux et Triceps",
          exercises: [
            "Développé couché incliné",
            "Dips",
            "Extensions de triceps avec haltères",
          ],
        },
        "6": {
          type: "Dos et Biceps",
          exercises: [
            "Tirage vertical à la poulie",
            "Rowing à un bras",
            "Curl incliné",
          ],
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 400,
          quantityMax: 500,
          unit: "g",
        },
        lipids: {
          quantityMin: 80,
          quantityMax: 100,
          unit: "g",
        },
        proteins: {
          quantityMin: 200,
          quantityMax: 250,
          unit: "g",
        },
        calories: {
          quantityMin: 3500,
          quantityMax: 4000,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 6,
        reachTimeInMonthMax: 8,
        gainsMinByMonths: 2.5,
        gainsMaxByMonths: 3,
        gainsUnit: "kg",
      },
      conseil:
        "La clé pour une prise de masse réussie est de manger en excès calorique et de soulever des poids lourds avec une priorité sur les exercices composés.",
    },
    profile: {
      age: 29,
      gender: "H",
      height: 185,
      weight: 60,
      objectiveWeight: 80,
      createdOn: "2023-04-13T04:28:43.342Z",
      commentary:
        "Je suis prêt à commencer un programme de musculation et à suivre un régime riche en protéines.",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "Marche",
          exercises: ["Marche rapide"],
        },
        "1": {
          type: "Vélo",
          exercises: [
            "Vélo d'appartement",
            "Vélo elliptique",
            "Cyclisme extérieur",
          ],
        },
        "2": {
          type: "Natation",
          exercises: ["Brasse", "Crawl", "Dos crawlé"],
        },
        "3": {
          type: "Marche",
          exercises: ["Marche rapide"],
        },
        "4": {
          type: "Vélo",
          exercises: [
            "Vélo d'appartement",
            "Vélo elliptique",
            "Cyclisme extérieur",
          ],
        },
        "5": {
          type: "Natation",
          exercises: ["Brasse", "Crawl", "Dos crawlé"],
        },
        "6": {
          type: "Repos",
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 113,
          quantityMax: 170,
          unit: "g",
        },
        lipids: {
          quantityMin: 36,
          quantityMax: 53,
          unit: "g",
        },
        proteins: {
          quantityMin: 95,
          quantityMax: 143,
          unit: "g",
        },
        calories: {
          quantityMin: 1500,
          quantityMax: 1800,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 6,
        reachTimeInMonthMax: 12,
        gainsMinByMonths: 2,
        gainsMaxByMonths: 4,
        gainsUnit: "kg",
      },
      conseil:
        "Il est important de varier les activités physiques pour éviter la monotonie et booster la motivation. Essayez de combiner marche, vélo et natation pour un entraînement complet !",
    },
    profile: {
      age: 50,
      gender: "F",
      height: 170,
      weight: 120,
      objectiveWeight: 85,
      createdOn: "2023-05-06T01:35:40.770Z",
      commentary:
        "J'aime marcher, mais j'aimerais essayer d'autres activités comme le vélo ou la natation.",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "Cardio",
          exercises: [
            "Course à pied (30 minutes)",
            "Corde à sauter (10 minutes)",
            "Vélo elliptique (20 minutes)",
          ],
        },
        "1": {
          type: "Renforcement musculaire",
          exercises: [
            "Squats (3 séries de 10 répétitions)",
            "Fentes avant (3 séries de 10 répétitions)",
            "Pompes (3 séries de 10 répétitions)",
            "Tractions (3 séries de 5 répétitions)",
          ],
        },
        "2": {
          type: "Cardio",
          exercises: [
            "Natation (20 minutes)",
            "Course à pied (20 minutes)",
            "Rameur (10 minutes)",
          ],
        },
        "3": {
          type: "Renforcement musculaire",
          exercises: [
            "Développé couché (3 séries de 8 répétitions)",
            "Curl biceps (3 séries de 10 répétitions)",
            "Extensions triceps (3 séries de 10 répétitions)",
            "Gainage (3 séries de 30 secondes)",
          ],
        },
        "4": {
          type: "Cardio",
          exercises: [
            "Course à pied (30 minutes)",
            "Vélo elliptique (20 minutes)",
            "Sauts à la corde (10 minutes)",
          ],
        },
        "5": {
          type: "Renforcement musculaire",
          exercises: [
            "Soulevé de terre (3 séries de 8 répétitions)",
            "Rowing (3 séries de 10 répétitions)",
            "Presse à cuisses (3 séries de 10 répétitions)",
            "Abdominaux (3 séries de 15 répétitions)",
          ],
        },
        "6": {
          type: "Repos",
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 100,
          quantityMax: 150,
          unit: "g",
        },
        lipids: {
          quantityMin: 50,
          quantityMax: 70,
          unit: "g",
        },
        proteins: {
          quantityMin: 120,
          quantityMax: 150,
          unit: "g",
        },
        calories: {
          quantityMin: 1500,
          quantityMax: 1800,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 4,
        reachTimeInMonthMax: 6,
        gainsMinByMonths: 1,
        gainsMaxByMonths: 1.5,
        gainsUnit: "kg",
      },
      conseil:
        "Pour favoriser la perte de poids, il est important de créer un déficit calorique en combinant exercices et alimentation équilibrée.",
    },
    profile: {
      age: 33,
      gender: "H",
      height: 175,
      weight: 80,
      objectiveWeight: 70,
      createdOn: "2023-03-25T02:47:21.752Z",
      commentary:
        "Je souhaite perdre du poids et tonifier mon corps. Je pratique déjà la course à pied, mais je suis intéressé par d'autres activités sportives et un programme nutritionnel adapté pour atteindre mon objectif.",
    },
  },
  {
    program: {
      workoutPlan: {
        "0": {
          type: "Repos",
        },
        "1": {
          type: "yoga",
          exercises: [
            "Salutation au soleil",
            "Posture de l'arbre",
            "La planche",
          ],
        },
        "2": {
          type: "marche",
          exercises: ["Marche rapide pendant 45 minutes"],
        },
        "3": {
          type: "gymnastique aquatique",
          exercises: ["Aquabike", "Aquagym"],
        },
        "4": {
          type: "yoga",
          exercises: [
            "Exercice de respiration",
            "Posture de l'arc",
            "Posture de la grenouille",
          ],
        },
        "5": {
          type: "Repos",
        },
        "6": {
          type: "marche",
          exercises: ["Marche rapide pendant 30 minutes"],
        },
      },
      nutritionPlan: {
        carbs: {
          quantityMin: 120,
          quantityMax: 150,
          unit: "g",
        },
        lipids: {
          quantityMin: 40,
          quantityMax: 60,
          unit: "g",
        },
        proteins: {
          quantityMin: 80,
          quantityMax: 100,
          unit: "g",
        },
        calories: {
          quantityMin: 1400,
          quantityMax: 1600,
          unit: "kcal",
        },
      },
      objective: {
        reachTimeInMonthMin: 8,
        reachTimeInMonthMax: 12,
        gainsMinByMonths: 2.5,
        gainsMaxByMonths: 3,
        gainsUnit: "kg",
      },
      conseil:
        "Pour perdre du poids de manière saine et durable, il est important de combiner une activité sportive régulière et une alimentation équilibrée. Pour votre profil, je vous conseille des activités douces comme le yoga ou la gymnastique aquatique, en complément d'une marche quotidienne.",
    },
    profile: {
      age: 60,
      gender: "F",
      height: 162,
      weight: 100,
      objectiveWeight: 70,
      createdOn: "2023-04-01T20:55:11.661Z",
      commentary:
        "Je suis ouverte à des activités douces comme le yoga ou la gymnastique aquatique.",
    },
  },
]);
function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
