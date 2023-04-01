export function createProfile(body: FormData): Profile {
  if (
    !body.has("age") ||
    !body.has("gender") ||
    !body.has("height") ||
    !body.has("weight") ||
    !body.has("objectiveWeight")
  )
    throw new Error("Profil invalide");
  return {
    age: Number(body.get("age")),
    gender: body.get("gender") === "H" ? "H" : "F",
    height: Number(body.get("height")),
    weight: Number(body.get("weight")),
    objectiveWeight: Number(body.get("objectiveWeight")),
  };
}
