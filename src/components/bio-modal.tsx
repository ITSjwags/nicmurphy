import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { vwCap } from '../utils/scale'
import { linkStyles } from './link'

type BioModalProps = {
  label: string
  children: React.ReactNode
}

const BioModal = ({ label, children }: BioModalProps) => {
  const [showModal, toggleModal] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    toggleModal((current) => !current)
  }

  useEffect(() => {
    if (!showModal) return

    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') toggleModal(false)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      triggerRef.current?.focus()
    }
  }, [showModal])

  return (
    <>
      <Trigger ref={triggerRef} type="button" onClick={handleClick}>
        {label}
      </Trigger>

      {showModal && (
        <Modal role="dialog" aria-modal="true" aria-label={label}>
          <Close ref={closeRef} onClick={handleClick} aria-label="Close bio">
            X
          </Close>
          <ModalContent>{children}</ModalContent>
        </Modal>
      )}
    </>
  )
}

const Trigger = styled.button`
  ${linkStyles}
  background: transparent;
  border: 0;
  display: inline-block;
  font-size: ${vwCap(4)};
  margin-bottom: 10px;
  padding: 0;
  text-transform: uppercase;
`

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-size: ${vwCap(2.5)};
  padding: ${vwCap(3)};
  position: fixed;
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
  padding: 0;
  position: absolute;
  top: ${vwCap(2)};
  left: ${vwCap(2)};

  &:focus-visible {
    outline: 2px solid currentColor;
  }
`

const ModalContent = styled.p`
  font-size: ${vwCap(3)};
  padding: ${vwCap(1)} ${vwCap(6)};
`

export default BioModal
