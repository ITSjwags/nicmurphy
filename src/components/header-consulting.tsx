import { Link as GatsbyLink } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'

import { vwCap } from '../utils/scale'

const HeaderConsulting = () => {
  const [showModal, toggleModal] = useState(false)

  const handleModalLinkClick = () => {
    if (window !== undefined) window.scrollTo(0, 0)
    toggleModal(!showModal)
  }

  return (
    <Container>
      <HeadlineContainer>
        <Headline to="/">Nic Murphy</Headline>
      </HeadlineContainer>
      <Subheadline>Creative Consulting</Subheadline>
      <Subheadline>Advice Accountability Enthusiasm</Subheadline>
      <Tagline>
        1st meeting free
        <br />I want to{' '}
        <Link as="button" onClick={handleModalLinkClick}>
          HELP
        </Link>{' '}
        you
      </Tagline>

      <Contact href="mailto:nic@nicmurphy.com">nic@nicmurphy.com</Contact>

      {showModal && (
        <Modal>
          <Close onClick={handleModalLinkClick}>X</Close>
          <ModalContent>
            Creative + Developmental:
            <hr />
            <span>Producer</span>
            <span>Editor</span>
            <span>Consultant</span>
            <span>Manager</span>
            <span>Doctor</span>
            <span>Manifester</span>
            <span>Enthusiast</span>
            <span>Lubricant</span>
          </ModalContent>
        </Modal>
      )}
    </Container>
  )
}

const Container = styled.header`
  padding: ${vwCap(2)} ${vwCap(4)};
`

const HeadlineContainer = styled.div`
  margin-bottom: ${vwCap(1)};
  text-align: center;
`

const Headline = styled(GatsbyLink)`
  background: transparent;
  border: 0;
  color: var(--blue);
  cursor: pointer;
  font-size: ${vwCap(14)};
  line-height: 1;
  text-decoration: underline;
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
  }
`

const Subheadline = styled.p`
  font-size: ${vwCap(5)};
  margin: 0;
  text-align: center;
`

const Tagline = styled.p`
  font-size: ${vwCap(3.5)};
  margin: ${vwCap(7)} 0 0 0;
`

const Link = styled.a`
  background: transparent;
  border: 0;
  color: var(--red);
  cursor: pointer;
  display: inline-block;
  padding: 0;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

const Contact = styled(Link)`
  font-size: ${vwCap(6)};
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
  font-size: ${vwCap(6.2)};
  padding: ${vwCap(1)} ${vwCap(6)};

  > span {
    display: block;
    font-size: ${vwCap(5.7)};
  }

  > hr {
    margin: ${vwCap(1)} 0;
  }
`

export default HeaderConsulting
