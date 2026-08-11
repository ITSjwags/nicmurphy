// Renders a comma-separated CMS field as wide-tracked text: normal spacing
// stays within each item (so multi-word items like "Low Impact Doc Style"
// read as one phrase), wide spacing goes between items.
export const wideSpaced = (commaSeparated: string, gapWidth = 2): string =>
  commaSeparated
    .split(',')
    .map((item) => item.trim())
    .join(' '.repeat(gapWidth))
