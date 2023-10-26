type Mods = Record<string, boolean | string>

export function classNames (mainClass: string, mods: Mods = {}, additional: string[] = []) {
  return [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key]) => key)
  ]
    .join(' ')
}
