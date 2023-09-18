import { ReactNode } from 'react'

type TModalProps = {
  isOpen?: boolean
  onClose?: () => void
  children: ReactNode
  className?: string
}

const Overlay = ({ isOpen, onClose, children, className }: TModalProps) => {
  return (
    <>
      {isOpen && (
        <div className={className} onClick={onClose}>
          {children}
        </div>
      )}
    </>
  )
}

const Window = ({ children, ...props }: TModalProps) => {
  const handleStopPropagation = (e: { stopPropagation: () => void }) => e.stopPropagation()
  return (
    <section {...props} onClick={handleStopPropagation}>
      {children}
    </section>
  )
}

const Close = ({ onClose, children, ...props }: TModalProps) => {
  return (
    <button {...props} onClick={onClose}>
      {children}
    </button>
  )
}

export const Modal = Object.assign({
  Overlay,
  Window,
  Close,
})
