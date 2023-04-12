import { Form } from "@remix-run/react";
import { Select } from "../../common/Select";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { Card } from "../../common/Card";
import { LabelError } from "~/components/common/LabelError";
import { TextArea } from "~/components/common/TextArea";

export function FormSendProfile({
  isLoading,
  errors = {},
}: {
  isLoading: boolean;
  errors?: { [key: string]: string };
}) {
  return (
    <Card color="bg-gray-900">
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
          placeholder="80"
          label="Poids actuel"
          required
        />
        <Input
          type="number"
          min={0}
          name="objectiveWeight"
          error={errors["objectiveWeight"]}
          end="kg"
          placeholder="90"
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
          <Button isLoading={isLoading}>Envoyer</Button>
        </div>
      </Form>
    </Card>
  );
}
