import { ReactNode } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
const Overlay = ({ onClose, children, className }: { onClose: any; children: ReactNode; className: string }) => {
  const handleIsOpen = () => onClose(false)
  return (
    <div className={className} onClick={handleIsOpen}>
      {children}
    </div>
  )
}

const Window = ({ children, ...props }: any) => {
  const handleStopPropagation = (e: { stopPropagation: () => any }) => e.stopPropagation()
  return (
    <section {...props} onClick={handleStopPropagation}>
      {children}
    </section>
  )
}

const CloseButton = ({ onClose, children, ...props }: any) => {
  const handleIsOpen = () => onClose(false)
  return (
    <button {...props} onClick={handleIsOpen}>
      {children}
    </button>
  )
}

export const Modal = Object.assign({
  Overlay,
  Window,
  CloseButton,
})
