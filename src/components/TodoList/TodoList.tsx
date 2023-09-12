import { observer } from 'mobx-react-lite'
import TodosItem from '../TodoItem/TodoItem'
import { todosStore } from '../../stores/todosStore'
import styles from './TodosList.module.scss'

const TodosList = observer(() => {
  const todos = todosStore.todos

  return (
    <div className={styles.container}>
      {todos &&
        todos.map(({ title, id, body, isChecked }) => (
          <ul key={id} className={styles.list}>
            <li className={styles.item}>
              <TodosItem title={title} body={body} id={id} check={isChecked} />
            </li>
          </ul>
        ))}
    </div>
  )
})

export default TodosList
