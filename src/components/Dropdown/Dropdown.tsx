/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from 'react-select'
import styles from './Dropdown.module.scss'

const options = [
  { value: 'date-create-new', label: 'Дата создания: Новые' },
  { value: 'date-create-old', label: 'Дата создания: Старые' },
  { value: 'completed', label: 'Выполнено' },
  { value: 'not-completed', label: 'Не выполнено' },
]

const colorStyles = {
  option: (styles: any, { isFocused }: any) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#e479cd' : '#21212b',
      color: isFocused ? '#21212b' : '#d2d2d3',
      borderColor: isFocused ? 'white' : 'pink',
    }
  },
}

const Dropdown = () => {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Сортировка</h3>
        <Select className={styles.select} defaultValue={options[0]} options={options} styles={colorStyles} />
      </div>
    </>
  )
}

export default Dropdown
