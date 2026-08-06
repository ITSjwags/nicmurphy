import { Link as GatsbyLink } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'

import arrowSrc from '../images/down-arrow.svg'
import arrowRightSrc from '../images/right-arrow-red.svg'
import { vwCap } from '../utils/scale'

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
        Producer
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
          href="NicMurphyResume072322.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
        <br />
        <Link
          href="https://vimeo.com/nicmurphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vimeo
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
            Then Los Angeles, where I have spent the last 6 years full time
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
  padding: ${vwCap(2)} ${vwCap(4)};
`

const Headline = styled.h1`
  font-size: ${vwCap(14)};
  line-height: 1;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`

const Subheadline = styled.p`
  font-size: ${vwCap(4)};
  margin: 0;
  text-align: center;

  > span {
    margin-left: ${vwCap(6)};
  }
`

const Tagline = styled.p`
  font-size: ${vwCap(2.9)};
  margin: 3px 0 0 0;
  text-align: center;
`

const Consulting = styled.div`
  text-align: right;
  margin: ${vwCap(2)} 0 ${vwCap(-2)} 0;
`

const ConsultingLink = styled(GatsbyLink)`
  background: transparent;
  border: 0;
  color: var(--red);
  cursor: pointer;
  display: inline-block;
  font-size: ${vwCap(3.8)};
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
  font-size: ${vwCap(1.85)};
  margin: 0;
  padding-right: ${vwCap(1.8)};
`

const ArrowRight = styled.img`
  margin-left: ${vwCap(1)};
  position: relative;
  top: ${vwCap(0.5)};
  max-width: ${vwCap(3.5)};
`

const Links = styled.section`
  padding: 0 ${vwCap(1)} ${vwCap(5)} ${vwCap(1)};
`

const Link = styled.a`
  background: transparent;
  border: 0;
  color: var(--blue);
  cursor: pointer;
  display: inline-block;
  font-size: ${vwCap(7)};
  margin-bottom: 10px;
  padding: 0;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

const Work = styled.p`
  font-size: ${vwCap(7)};
  margin: 0;
  text-align: right;
  text-transform: uppercase;
`

const Arrow = styled.img`
  margin-left: ${vwCap(-2.3)};
  width: 5%;
  max-width: 68px;
`

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-size: ${vwCap(2.5)};
  padding: ${vwCap(3)};
  position: absolute;
  top: ${vwCap(2)};
  right: ${vwCap(2)};
  left: ${vwCap(2)};
  z-index: 1;
`

const Close = styled.button`
  background: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  font-size: ${vwCap(6)};
  margin: 0;
  outline: 0;
  padding: 0;
  position: absolute;
  top: ${vwCap(2)};
  left: ${vwCap(2)};
`

const ModalContent = styled.p`
  font-size: ${vwCap(3)};
  padding: ${vwCap(1)} ${vwCap(6)};
`

export default Header
