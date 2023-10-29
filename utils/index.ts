export const cx = (...names: (string | boolean | null | undefined)[]) =>
  names.filter((item): item is string => typeof item === 'string').join(' ')
