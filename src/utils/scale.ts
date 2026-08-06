const BREAKPOINT_PX = 1280

// Grows with viewport exactly as before up to BREAKPOINT_PX, then holds steady.
// Negative values need max() instead of min() since capping means limiting how
// negative the value gets, not how large.
export const vwCap = (vw: number): string => {
  const px = Math.round((vw * BREAKPOINT_PX) / 100)
  return vw < 0 ? `max(${vw}vw, ${px}px)` : `min(${vw}vw, ${px}px)`
}
