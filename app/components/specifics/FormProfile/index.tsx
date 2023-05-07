import { Form } from "@remix-run/react";
import { Select } from "../../commons/Select";
import { Input } from "../../commons/Input";
import { Button } from "../../commons/Button";
import { Card } from "../../commons/Card";
import { LabelError } from "~/components/commons/LabelError";
import { TextArea } from "~/components/commons/TextArea";

export function FormProfile({
  loading,
  errors = {},
  disabled,
}: {
  loading: boolean;
  errors?: { [key: string]: string };
  disabled: boolean;
}) {
  return (
    <Card className="bg-gray-900 relative overflow-hidden">
      {disabled && (
        <div className="absolute inset-0 backdrop-blur-sm bg-gray-900/75 z-10 flex items-center">
          <Card className="m-8  bg-indigo-500">
            <div className="text-2xl  text-white">
              <span className="font-semibold">Oups ! </span>
              Nos coachs virtuels sont actuellement en pause-café.
            </div>
            <div className="text-lg text-white/75 mt-2">
              Revenez très bientôt pour profiter de nos programmes de
              musculation sur mesure.
            </div>
          </Card>
        </div>
      )}
      <Form method="post" className="flex flex-col gap-4">
        <div className="text-xl">Décrivez nous votre profil</div>
        <Select
          name="gender"
          error={errors["gender"]}
          placeholder="Sélectionnez..."
          label="Genre"
          required
        >
          <option value="H">Homme</option>
          <option value="F">Femme</option>
        </Select>
        <Input
          type="number"
          min={0}
          name="age"
          error={errors["age"]}
          end="ans"
          placeholder="30"
          label="Âge"
          required
        />
        <Input
          type="number"
          min={0}
          name="height"
          error={errors["height"]}
          end="cm"
          placeholder="180"
          label="Taille"
          required
        />
        <Input
          type="number"
          min={0}
          name="weight"
          error={errors["weight"]}
          end="kg"
          placeholder="71"
          label="Poids actuel"
          required
        />
        <Input
          type="number"
          min={0}
          name="objectiveWeight"
          error={errors["objectiveWeight"]}
          end="kg"
          placeholder="85"
          label="Poids désiré"
          required
        />
        <TextArea
          maxLength={120}
          name="commentary"
          error={errors["commentary"]}
          placeholder="Décrivez ici toute information particulière concernant votre régime alimentaire, entraînement spécialisé ou autre élément pertinent."
          label="Informations supplémentaires"
        />
        {errors["form"] && <LabelError>{errors["form"]}</LabelError>}
        <div className="col-span-2 flex justify-end mt-2">
          <Button isLoading={loading}>Envoyer</Button>
        </div>
      </Form>
    </Card>
  );
}
