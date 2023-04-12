import { Card } from "~/components/commons/Card";
import type { Profile } from "~/models/types";
import { TextSection } from "../../commons/TextSection";
import { ValueSection } from "../../commons/ValueSection";

export function CardProfile({ profile }: { profile: Profile }) {
  return (
    <Card className="bg-gray-900">
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
        {profile.commentary && (
          <div className="md:col-start-1 md:col-span-5 md:row-start-2 max-w-md">
            <TextSection title="Informations supplémentaires">
              {profile.commentary}
            </TextSection>
          </div>
        )}
      </div>
    </Card>
  );
}
