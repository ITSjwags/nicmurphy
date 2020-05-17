import React, { useState } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

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
  padding: 2vw 4vw;
`

const HeadlineContainer = styled.div`
  margin-bottom: 1vw;
  text-align: center;
`

const Headline = styled(GatsbyLink)`
  background: transparent;
  border: 0;
  color: var(--blue);
  cursor: pointer;
  font-size: 14vw;
  line-height: 1;
  text-decoration: underline;
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
  }
`

const Subheadline = styled.p`
  font-size: 5vw;
  margin: 0;
  text-align: center;
`

const Tagline = styled.p`
  font-size: 3.5vw;
  margin: 7vw 0 0 0;
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
  font-size: 6vw;
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
  font-size: 6.2vw;
  padding: 1vw 6vw;

  > span {
    display: block;
    font-size: 5.7vw;
  }

  > hr {
    margin: 1vw 0;
  }
`

export default HeaderConsulting
