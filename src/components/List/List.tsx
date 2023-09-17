import { observer } from 'mobx-react-lite'
import Item from '../Item/Item'
import { todosStore } from '../../stores/todosStore'
import styles from './List.module.scss'
//import EditPopup from '../EditPopup/EditPopup'

const List = observer(() => {
  const { sorted } = todosStore
  //const { filtred } = todosStore

  return (
    <div className={styles.container}>
      {/*<EditPopup />*/}
      {sorted &&
        sorted.map(({ title, id, body, isChecked, create }) => (
          <ul key={id} className={styles.list}>
            <li className={styles.item}>
              <Item title={title} body={body} id={id} isChecked={isChecked} create={create} dateCreate={0} />
            </li>
          </ul>
        ))}

      {/*{filtred &&
        filtred.map(({ title, id, body, isChecked, create }) => (
          <ul key={id} className={styles.list}>
            {sorted &&
              sorted.map(({ title, id, body, isChecked, create }) => (
                <ul key={id} className={styles.list}>
                  <li className={styles.item}>
                    <Item title={title} body={body} id={id} isChecked={isChecked} create={create.toString()} dateCreate={0} />
                  </li>
                </ul>
              ))}
          </ul>
        ))}*/}
    </div>
  )
})

export default List
