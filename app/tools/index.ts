const SIMPLE_JSON_IN_STRING_REGEX = /(\{.+?\n\})/s;

export function parseSpecificJsonObjectFromString(input: string): any {
  const result = SIMPLE_JSON_IN_STRING_REGEX.exec(input);

  if (!result || result.length === 0) {
    throw new Error("No json in string");
  }

  return JSON.parse(result[0]);
}
