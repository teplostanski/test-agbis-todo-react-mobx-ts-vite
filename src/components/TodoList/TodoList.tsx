import { observer } from 'mobx-react-lite'
import TodosItem from '../TodoItem/TodoItem'
//import { getSortedArray } from '../../helpers/getSortedArray'
import { todosStore } from '../../stores/todosStore'
import styles from './TodosList.module.scss'
//import { TTodos } from '../../types'
//import { observable } from 'mobx'
import TodoEditor from '../TodoEditor/TodoEditor'

const TodosList = observer(() => {
  const { sorted } = todosStore
  //const todos = todosStore.todos
  //const option = todosStore.currentSortSelectionOption

  //const sort = (arr: TTodos[], option: string) => {
  //  if (option === 'date-create-new') {
  //    return getSortedArray({arr: arr, by: 'asc', key: 'create'})
  //  }
  //}

  //const sortTodos = sort(todos, option)

  return (
    <div className={styles.container}>
      <TodoEditor />
      {sorted &&
        sorted.map(({ title, id, body, isChecked, create }) => (
          <ul key={id} className={styles.list}>
            <li className={styles.item}>
              <TodosItem title={title} body={body} id={id} check={isChecked} create={create.toString()} />
            </li>
          </ul>
        ))}
    </div>
  )
})

export default TodosList
