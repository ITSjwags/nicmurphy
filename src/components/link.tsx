import styled, { css } from 'styled-components'

export const linkStyles = css`
  color: var(--blue);
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

const Link = styled.a`
  ${linkStyles}
`

export default Link
