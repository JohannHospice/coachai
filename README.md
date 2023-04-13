# CoachAI

Ce projet est une application web développée avec OpenAI, React, Remix, TailwindCSS et Zod pour aider les utilisateurs à créer des plans d'entraînement et de nutrition sur mesure en fonction de leur profil et de leurs objectifs.

## Fonctionnalités

- Formulaire de saisie de profil pour recueillir les informations sur l'utilisateur
- Génération automatisée d'un plan d'entraînement et de nutrition personnalisé en utilisant OpenAI
- Affichage des résultats dans un format clair et facile à comprendre

## Installation et configuration

1. Clonez le dépôt Git sur votre machine locale :

```bash
git clone https://github.com/JohannHospice/coachai.git
```

2. Accédez au dossier du projet et installez les dépendances :

```bash
cd coachai
npm install
```

3. Configurez vos variables d'environnement pour l'API OpenAI dans un fichier .env à la racine du projet :

```bash
OPENAI_API_KEY=your_openai_api_key
```

4. Lancez le serveur de développement :

```bash
npm run dev
```

L'application devrait être accessible à l'adresse http://localhost:3000.

## Utilisation

1. Accédez à la page d'accueil de l'application et remplissez le formulaire avec les informations de profil.
2. Cliquez sur "Générer un plan" pour envoyer les informations au serveur.
3. Le serveur interroge l'API OpenAI et génère un plan d'entraînement et de nutrition personnalisé pour l'utilisateur.
4. Les résultats sont affichés sur la page "plan-sportif-et-nutritionel", où l'utilisateur peut consulter et suivre son programme personnalisé.

## Contribution

Les contributions au projet sont les bienvenues. Veuillez créer une branche à partir de la branche main et soumettre une Pull Request pour proposer vos modifications.

## Licence

Ce projet est sous licence MIT. Pour plus d'informations, consultez le fichier LICENSE dans ce dépôt.
