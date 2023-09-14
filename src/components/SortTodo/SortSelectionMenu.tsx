/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Select, { OnChangeValue } from 'react-select'
import { todosStore } from '../../stores/todosStore'
import { TSortSelectionOptions } from '../../types'
import { sortSelectionOptions as options, colorStyles } from '../../constants'
import styles from './SortSelectionMenu.module.scss'

const SortSelectionMenu = observer(() => {
  const { currentSortSelectionOption: currentOption, setCurrentSortSelectionOption: setCurrentOption } = todosStore

  useEffect(() => {
    setCurrentOption(options[0].values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getValue = () => {
    return currentOption ? options.find((i) => i.values === currentOption) : []
  }

  const handleChange = (newValue: OnChangeValue<TSortSelectionOptions, boolean>) => {
    setCurrentOption((newValue as TSortSelectionOptions[]).values)
  }

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Сортировка</h3>
        <Select onChange={handleChange} value={getValue()} className={styles.select} defaultValue={options[0]} options={options} styles={colorStyles} />
      </div>
    </>
  )
})

export default SortSelectionMenu
