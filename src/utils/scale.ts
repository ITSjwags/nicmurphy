import { css } from 'styled-components'

export const BREAKPOINT_PX = 1280

// Grows with viewport exactly as before up to BREAKPOINT_PX, then holds steady.
// Negative values need max() instead of min() since capping means limiting how
// negative the value gets, not how large.
export const vwCap = (vw: number): string => {
  const px = Math.round((vw * BREAKPOINT_PX) / 100)
  return vw < 0 ? `max(${vw}vw, ${px}px)` : `min(${vw}vw, ${px}px)`
}

// Caps a page's content width at the same breakpoint the font/spacing
// scaling stops at, so everything locks together and centers instead of the
// container stretching wider than the text and spacing inside it.
export const pageContentStyles = css`
  margin: 0 auto;
  max-width: ${BREAKPOINT_PX}px;
`
