export function createProfile(body: FormData): Profile {
  return {
    age: Number(body.get("age")),
    gender: body.get("gender") === "H" ? "H" : "F",
    height: Number(body.get("height")),
    weight: Number(body.get("weight")),
    objectiveWeight: Number(body.get("objectiveWeight")),
  };
}
