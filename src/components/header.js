import React from 'react'
import styled from 'styled-components'
import arrowSrc from '../images/down-arrow.svg'

const Header = () => (
  <Container>
    <Headline>Nic Murphy</Headline>
    <Subheadline>
      Writer
      <span>Multimedia Director</span>
    </Subheadline>
    <Tagline>Organization Creativity Leadership</Tagline>
    <Links>
      <Link
        href="NicMurphyResume030920.pdf"
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

const Subheadline = styled.p`
  font-size: 5vw;
  margin: 0;
  text-align: center;

  > span {
    margin-left: 6vw;
  }
`

const Tagline = styled.p`
  font-size: 3.75vw;
  margin: 5px 0 0 0;
  text-align: center;
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
