const JSON_IN_STRING_REGEX = /(\{.+?\n\})/s;
export function parseJSONFromString(input: string): any {
  const result = JSON_IN_STRING_REGEX.exec(input);

  if (!result || result.length === 0) {
    throw new Error("No json in string");
  }

  return JSON.parse(result[0]);
}
