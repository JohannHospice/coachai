import type { ActionArgs, V2_MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Select } from "../components/Select";
import { Input } from "../components/Input";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Coach" }];
};
export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  console.log(body.values());

  return 0;
}

export default function Index() {
  return (
    <div className="">
      <Form method="post" className="flex gap-4 flex-col">
        <Select name="gender">
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </Select>
        <Select name="age" placeholder="L'âge" defaultValue="18">
          {Array(120)
            .fill(0)
            .map((_, i) => (
              <option value={i} key={i}>
                {i} ans
              </option>
            ))}
        </Select>
        <Input type="number" name="height" placeholder="La taille en cm" />
        <Input type="number" name="weight" placeholder="Le poids en kg" />
        <button
          className="bg-yellow-500 uppercase font-semibold rounded w-full py-2 px-3"
          type="submit"
        >
          Générer le programme
        </button>
      </Form>
    </div>
  );
}
