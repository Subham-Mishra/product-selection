export const headingClasses = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  return level === 1
    ? 'text-xl font-bold'
    : level === 2
      ? 'text-lg font-semibold'
      : level === 3
        ? 'text-base font-medium'
        : level === 4
          ? 'text-sm font-medium'
          : level === 5
            ? 'text-xs font-medium'
            : 'text-xs font-medium'
}
