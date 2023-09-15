/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react-lite'
import cn from 'classnames'
import { todosStore } from '../../stores/todosStore'
import { getFormatDate } from '../../helpers/getFormatDate'
import DeleteButton from '../DeleteButton/DeleteButton'
import styles from './Item.module.scss'

type TTodosItem = {
  title: string
  body: string
  check: any
  id: string
  create: string
}

const Item = observer(({ title, body, id, check, create }: TTodosItem) => {
  const handleCurrentTodo = () => {
    todosStore.setCurrentTodoId(id)
    todosStore.getCurrentTodo(id)
    todosStore.setOpenEditPopup(true)
  }

  return (
    <div className={styles.container}>
      <input type='checkbox' checked={check} readOnly onClick={() => todosStore.setCompleted(id)} />
      <div onClick={handleCurrentTodo} className={cn(check && styles.done, styles.content)}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <p>{body}</p>
        <span>{getFormatDate({ date: create })}</span>
      </div>
      <DeleteButton id={id} />
    </div>
  )
})

export default Item
