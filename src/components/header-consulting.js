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
      <Subheadline>
        Creative
        <span>Consulting</span>
      </Subheadline>

      {showModal && (
        <Modal>
          <Close onClick={handleModalLinkClick}>X</Close>
          <ModalContent>
            I grew up north of Saint Paul, Minnesota and went to Wake Forest
            University in North Carolina studying history, film, and theater.
            <br />
            <br />
            Back to The Twin Cities for 3 years - production assisting,
            shooting, and assistant directing music videos, short films, and
            commercials.
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

const HeadlineContainer = styled.div`
  margin-bottom: 1vw;
  text-align: center;
`

const Headline = styled(GatsbyLink)`
  background: transparent;
  border: 0;
  color: #0000ff;
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
  font-size: 7.5vw;
  margin: 0;
  text-align: center;

  > span {
    margin-left: 6vw;
  }
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

export default HeaderConsulting
