import { observer } from 'mobx-react-lite'
import TodosItem from '../TodoItem/TodoItem'
//import { getSortedArray } from '../../helpers/getSortedArray'
import { todosStore } from '../../stores/todosStore'
import styles from './TodosList.module.scss'
//import { TTodos } from '../../types'
//import { observable } from 'mobx'

const TodosList = observer(() => {
  //const todos = todosStore.todos
  //const option = todosStore.currentSortSelectionOption

  console.log(todosStore.sorted)

  //const sort = (arr: TTodos[], option: string) => {
  //  if (option === 'date-create-new') {
  //    return getSortedArray({arr: arr, by: 'asc', key: 'create'})
  //  }
  //}

  //const sortTodos = sort(todos, option)

  return (
    <div className={styles.container}>
      {todosStore.sorted &&
        todosStore.sorted.map(({ title, id, body, isChecked, create }) => (
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
