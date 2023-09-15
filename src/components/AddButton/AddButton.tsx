/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import styles from './AddButton.module.scss'

const AddButton = ({ children, onClick, disabled, ...props }: { children: ReactNode; onClick: any; disabled: boolean }) => {
  return (
    <button {...props} className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default AddButton
