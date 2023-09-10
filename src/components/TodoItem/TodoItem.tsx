/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react-lite'
import cn from 'classnames'
import { todosStore } from '../../stores/todosStore'
import styles from './TodoItem.module.scss'

type TTodosItem = {
  title: string
  body: string
  check: any
  id: string
}

const TodosItem = observer(({ title, body, id, check }: TTodosItem) => {
  const handleCurrentTodo = () => {
    todosStore.setCurrentTodoId(id)
    todosStore.getCurrentTodo(id)
  }

  return (
    <div className={styles.container} onClick={handleCurrentTodo}>
      <input type='checkbox' onClick={() => todosStore.setCompleted(id)} />
      <div className={cn(check && styles.done)}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
})

export default TodosItem
