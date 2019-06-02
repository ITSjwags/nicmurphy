import React from 'react'
import styled from 'styled-components'
import resumeSrc from '../images/Nic Murphy Resume.pdf'
import arrowSrc from '../images/down-arrow.svg'

const Header = () => (
  <Container>
    <Headline>Nic Murphy</Headline>
    <Tagline>
      Writer <span>Multimedia Director</span>
    </Tagline>
    <Links>
      <Link href={resumeSrc} target="_blank" rel="noopener noreferrer">
        Resume
      </Link>
      <br />
      <Link href="mailto:IG@nharrisonmurphy ">IG@nharrisonmurphy </Link>
      <br />
      <Link href="mailto:nic@nicmurphy.com">nic@nicmurphy.com</Link>
    </Links>
    <Work>
      Work <Arrow src={arrowSrc} alt="arrow" />
    </Work>
  </Container>
)

const Container = styled.header`
  padding: 4vw;
`

const Headline = styled.h1`
  font-size: 13vw;
  line-height: 1;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

const Tagline = styled.p`
  font-size: 5vw;
  margin: 0;
  text-align: center;
  position: relative;
  left: -1.5vw;

  > span {
    margin-left: 4vw;
  }
`

const Links = styled.section`
  padding: 10vw 1vw 5vw 1vw;
`

const Link = styled.a`
  color: #0000ff;
  display: inline-block;
  font-size: 7vw;
  margin-bottom: 10px;

  &:hover {
    text-decoration: none;
  }
`

const Work = styled.p`
  font-size: 7vw;
  margin: 0;
  text-align: right;
  text-transform: uppercase;
`

const Arrow = styled.img`
  margin-left: -2.3vw;
  width: 5%;
  max-width: 68px;
`

export default Header
