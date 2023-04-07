import { CheckIcon } from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <div>
      <h1 className="text-6xl font-semibold mb-2">
        Votre Coach Fitness Intelligent
      </h1>
      <h2 className="text-xl text-gray-500 mb-6">
        Atteignez vos objectifs rapidement et efficacement grâce CoachAI qui
        génère le programme sportifs et nutritionnels sur mesure basé sur votre
        profil et vos besoins.
      </h2>
      <div className="flex flex-col border rounded-lg border-gray-800">
        <div className="flex border-b border-gray-800 py-6 mx-6 gap-4">
          <CheckIcon className="w-5 h-5 flex-none" />
          <span>
            Atteignez vos objectifs plus rapidement avec des entraînements sur
            mesure, adaptés à votre profil et conçus pour maximiser votre
            progression.
          </span>
        </div>
        <div className="flex border-b border-gray-800 py-6 mx-6 gap-4">
          <CheckIcon className="w-5 h-5 flex-none" />
          <span>
            Optimisez vos résultats grâce à des conseils nutritionnels
            personnalisés, pour une alimentation équilibrée et adaptée à vos
            besoins spécifiques.
          </span>
        </div>
        <div className="flex py-6 mx-6 gap-4">
          <CheckIcon className="w-5 h-5 flex-none" />
          <span>
            Restez motivé et gardez le cap en visualisant le temps estimé pour
            atteindre vos objectifs.
          </span>
        </div>
      </div>
    </div>
  );
}
