import cn from 'classnames'
import styles from './Tabs.module.scss'
import { TTabsProps } from '../../types'

const Tabs = (props: TTabsProps) => {
  const { className = { tabs: '', tab: { tab: '', selected: '' }, label: { label: '', selected: '' } }, tabs, selectedId, onClick } = props

  return (
    <div className={cn(styles.tabs, className.tabs)}>
      {tabs &&
        tabs.map(({ label, id }) => (
          <div
            key={id}
            className={cn(styles.tab, className.tab.tab, {
              [styles.tab__selected || className.tab.selected]: id === selectedId,
            })}
            onClick={() => onClick(id)}
          >
            <div
              className={cn(styles.label, className.label.label, {
                [styles.label__selected || className.label.selected]: id === selectedId,
              })}
            >
              {label}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Tabs
