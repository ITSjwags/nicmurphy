import React from 'react'
import styled from 'styled-components'
import arrowSrc from '../images/down-arrow.svg'

const Header = () => (
  <Container>
    <Headline>Nic Murphy</Headline>
    <Tagline>
      <span>Writer</span>
      <span>Multimedia Director</span>
    </Tagline>
    <Links>
      <Link
        href="Nic Murphy Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Link>
      <br />
      <Link href="https://www.instagram.com/nharrisonmurphy/">
        IG@nharrisonmurphy
      </Link>
      <br />
      <Link href="mailto:nic@nicmurphy.com">nic@nicmurphy.com</Link>
    </Links>
    <Work>
      Work <Arrow src={arrowSrc} alt="arrow" />
    </Work>
  </Container>
)

const Container = styled.header`
  padding: 2vw 4vw;
`

const Headline = styled.h1`
  font-size: 14vw;
  line-height: 1;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

const Tagline = styled.p`
  align-items: center;
  display: flex;
  font-size: 5vw;
  justify-content: space-between;
  margin: 0;
  padding: 0 10.5vw;
`

const Links = styled.section`
  padding: 5vw 1vw;
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
