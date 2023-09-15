import { observer } from 'mobx-react-lite'
import Item from '../Item/Item'
import { todosStore } from '../../stores/todosStore'
import styles from './List.module.scss'
//import EditPopup from '../EditPopup/EditPopup'

const List = observer(() => {
  const { sorted } = todosStore

  return (
    <div className={styles.container}>
      {/*<EditPopup />*/}
      {sorted &&
        sorted.map(({ title, id, body, isChecked, create }) => (
          <ul key={id} className={styles.list}>
            <li className={styles.item}>
              <Item title={title} body={body} id={id} check={isChecked} create={create.toString()} />
            </li>
          </ul>
        ))}
    </div>
  )
})

export default List
