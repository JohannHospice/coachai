import { ValueSection } from "../../common/ValueSection";
import { Card } from "~/components/common/Card";

export function CardProfile({ profile }: { profile: Profile }) {
  return (
    <Card color="bg-gray-900">
      <h4 className="text-2xl mb-6">Profil du sportif</h4>
      <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-6">
        <ValueSection
          title="Genre"
          value={profile.gender === "H" ? "Homme" : "Femme"}
        />
        <ValueSection title="Âge" unit="ans" value={profile.age} />
        <ValueSection title="Taille" unit="cm" value={profile.height} />
        <ValueSection title="Poids" unit="kg" value={profile.weight} />
        <ValueSection
          title="Objectif de poids"
          unit="kg"
          value={profile.objectiveWeight}
        />
      </div>
    </Card>
  );
}
