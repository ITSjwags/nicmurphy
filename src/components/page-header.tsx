import styled from 'styled-components'

import { vwCap } from '../utils/scale'

export const Title = styled.h1<{ $align?: 'left' | 'center' }>`
  font-size: ${vwCap(4.8)};
  margin: ${vwCap(2)} 0 0 0;
  text-align: ${({ $align }) => $align || 'center'};
  text-transform: uppercase;
`

export const BackRow = styled.div`
  padding: ${vwCap(2)} 0;
  text-align: right;
`

export const Tagline = styled.p`
  font-size: ${vwCap(3)};
  font-weight: bold;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

export const SubTagline = styled.p`
  font-size: ${vwCap(2.9)};
  font-style: italic;
  margin: ${vwCap(1)} 0 ${vwCap(4)} 0;
  text-align: center;
`
