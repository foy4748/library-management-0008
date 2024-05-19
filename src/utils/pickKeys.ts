export default function pickKeys<T extends object, K extends keyof T>(
  base: T,
  ...keys: K[]
): Pick<T, K> {
  const entries = keys.map((key) => [key, base[key]]);
  return Object.fromEntries(entries);
}
