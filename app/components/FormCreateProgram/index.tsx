import { Form } from "@remix-run/react";
import { Select } from "../Select";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function FormCreateProgram() {
  return (
    <Form
      method="post"
      className="flex flex-col lg:flex-row justify-between gap-4 border border-gray-800 bg-gray-900 text-white lg:rounded-full rounded-2xl p-2"
    >
      <Select name="gender" defaultValue="H" placeholder="Le genre">
        <option value="H">Homme</option>
        <option value="F">Femme</option>
      </Select>
      <Select name="age" placeholder="L'âge" defaultValue="27">
        {Array(107)
          .fill(13)
          .map((min, i) => (
            <option value={i + min} key={i + min}>
              {i + min} ans
            </option>
          ))}
      </Select>
      <Select defaultValue="181" name="height" placeholder="La taille en cm">
        {Array(280)
          .fill(20)
          .map((min, i) => (
            <option value={i + min} key={i + min}>
              {i + min} cm
            </option>
          ))}
      </Select>
      <Select defaultValue="83" name="weight" placeholder="Le poids en kg">
        {Array(280)
          .fill(20)
          .map((min, i) => (
            <option value={i + min} key={i + min}>
              {i + min} kg
            </option>
          ))}
      </Select>
      <Select
        defaultValue="90"
        name="objectiveWeight"
        placeholder="Votre objectif de poids en kg"
      >
        {Array(280)
          .fill(20)
          .map((min, i) => (
            <option value={i + min} key={i + min}>
              {i + min} kg
            </option>
          ))}
      </Select>
      <button
        className="bg-yellow-500 transition-colors hover:bg-yellow-400 rounded-full p-2 flex align-center justify-center gap-2"
        type="submit"
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
        <span className="block lg:hidden">Rechercher</span>
      </button>
    </Form>
  );
}
