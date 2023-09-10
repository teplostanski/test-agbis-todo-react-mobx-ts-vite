import { observer } from 'mobx-react-lite'
import TodosItem from '../TodoItem/TodoItem'
import { todosStore } from '../../stores/todosStore'
import styles from './TodosList.module.scss'

const TodosList = observer(() => {
  const todos = todosStore.todos
  console.log(todos)

  return (
    <div>
      {todos &&
        todos.map(({ title, id, body }) => (
          <ul key={id} className={styles.list}>
            <li className={styles.item}>
              <TodosItem title={title} body={body} id={id} />
            </li>
          </ul>
        ))}
    </div>
  )
})

export default TodosList
