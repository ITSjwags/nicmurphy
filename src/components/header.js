import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import arrowSrc from '../images/down-arrow.svg'
import arrowRightSrc from '../images/right-arrow-red.svg'

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
        <span>Editor</span>
      </Subheadline>
      <Tagline>
        Organization&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creativity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Leadership
      </Tagline>
      <Consulting>
        <ConsultingLink to="/consulting">
          CONSULTING
          <ArrowRight src={arrowRightSrc} alt="arrow" />
          <br />
        </ConsultingLink>
        <ConsultingSubLink>(do you need creative help?)</ConsultingSubLink>
      </Consulting>
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
            I grew up north of Saint Paul, Minnesota and went to Wake Forest
            University in North Carolina studying history, film, and theater.
            <br />
            <br />
            Back to the Twin Cities for 3 years - crewing, shooting and
            assistant directing on music videos, short films, and commercials.
            <br />
            <br />
            Then Los Angeles, where I have spent the last 5 years full time
            freelancing between writing, directing, producing, editing,
            photography, and creative consulting.
            <br />
            <br />I am specifically interested in enthusiastic collaboration,
            the leadership of positive community, and the boundaries between
            reality/disreality/traditional/experimental.
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
  font-size: 4vw;
  margin: 0;
  text-align: center;

  > span {
    margin-left: 6vw;
  }
`

const Tagline = styled.p`
  font-size: 2.9vw;
  margin: 3px 0 0 0;
  text-align: center;
`

const Consulting = styled.div`
  text-align: right;
  margin: 2vw 0 -2vw 0;
`

const ConsultingLink = styled(GatsbyLink)`
  background: transparent;
  border: 0;
  color: var(--red);
  cursor: pointer;
  display: inline-block;
  font-size: 3.8vw;
  line-height: 1.2;
  padding: 0;
  text-align: right;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

const ConsultingSubLink = styled.p`
  color: var(--red);
  font-size: 1.85vw;
  margin: 0;
  padding-right: 1.8vw;
`

const ArrowRight = styled.img`
  margin-left: 1vw;
  position: relative;
  top: 0.5vw;
  max-width: 3.5vw;
`

const Links = styled.section`
  padding: 0 1vw 5vw 1vw;
`

const Link = styled.a`
  background: transparent;
  border: 0;
  color: var(--blue);
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
  background: rgba(0, 0, 0, 0.9);
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
