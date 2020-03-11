import React, { useState } from 'react'
import styled from 'styled-components'
import arrowSrc from '../images/down-arrow.svg'

const Header = () => {
  const [showModal, toggleModal] = useState(false)

  const handleModalLinkClick = () => {
    if (window !== undefined) window.scrollTo(0, 0)
    toggleModal(!showModal)
  }

  return (
    <Container>
      <Headline>Nic Murphy</Headline>
      <Subheadline>
        Writer
        <span>Multimedia Director</span>
      </Subheadline>
      <Tagline>Organization Creativity Leadership</Tagline>
      <Links>
        <Link as="button" onClick={handleModalLinkClick}>
          Bio
        </Link>
        <br />
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

      {showModal && (
        <Modal>
          <Close onClick={handleModalLinkClick}>X</Close>
          <ModalContent>
            Nic Murphy grew up north of Saint Paul, Minnesota and went to Wake
            Forest University in North Carolina studying history, film, and
            theater.
            <br />
            <br />
            Back to The Twin Cities for 3 years, crewing on music videos, short
            films, and commercials.
            <br />
            <br />
            Then Los Angeles, where he has spent the last 5 years full time
            freelancing between directing, producing, consulting, editing, and
            photography.
            <br />
            <br />
            He is most interested in the leadership of positive community, the
            play between reality/disreality, gender + love in the 21st century,
            and the connection between live immersive theater and classic
            filmmaking.
          </ModalContent>
        </Modal>
      )}
    </Container>
  )
}

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
  background: transparent;
  border: 0;
  color: #0000ff;
  cursor: pointer;
  display: inline-block;
  font-size: 7vw;
  margin-bottom: 10px;
  padding: 0;
  text-decoration: underline;

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

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 2.5vw;
  padding: 3vw;
  position: absolute;
  top: 2vw;
  right: 2vw;
  left: 2vw;
  z-index: 1;
`

const Close = styled.button`
  background: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  font-size: 6vw;
  margin: 0;
  outline: 0;
  padding: 0;
  position: absolute;
  top: 2vw;
  left: 2vw;
`

const ModalContent = styled.p`
  font-size: 3vw;
  padding: 1vw 6vw;
`

export default Header
