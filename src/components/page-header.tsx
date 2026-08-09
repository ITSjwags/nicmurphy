import styled from 'styled-components'

import { pageContentStyles, vwCap } from '../utils/scale'

export const PageContent = styled.div`
  ${pageContentStyles}
  padding: 0 ${vwCap(5)};
`

export const Title = styled.h1`
  font-size: ${vwCap(5.3)};
  margin: 0 0 ${vwCap(2)} 0;
  text-align: center;
  text-transform: uppercase;
`

export const BackRow = styled.div`
  padding: ${vwCap(2)} 0;
  text-align: right;
`

export const Tagline = styled.p`
  color: var(--red);
  font-size: ${vwCap(3)};
  font-weight: bold;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

export const SubTagline = styled.p`
  font-size: ${vwCap(1.9)};
  font-style: italic;
  margin: ${vwCap(1)} 0 ${vwCap(4)} 0;
  text-align: center;
  text-transform: uppercase;
`
