import { BsCheck } from 'react-icons/bs'
import styles from './Checkbox.module.scss'

const Checkbox = ({ checked, onClick, id }: { checked: boolean; onClick: () => void; id: string }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input type='checkbox' id={id} className={styles.checkbox} checked={checked} readOnly onClick={onClick} />
      <label htmlFor={id}>{checked && <BsCheck size={25} className={styles.checkIcon} />}</label>
    </div>
  )
}

export default Checkbox
