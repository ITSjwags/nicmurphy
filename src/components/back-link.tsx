import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { vwCap } from '../utils/scale'
import { linkStyles } from './link'

const StyledBackLink = styled(GatsbyLink)`
  ${linkStyles}
  display: inline-block;
  font-size: ${vwCap(3)};
`

const BackLink = () => <StyledBackLink to="/">BACK</StyledBackLink>

export default BackLink
