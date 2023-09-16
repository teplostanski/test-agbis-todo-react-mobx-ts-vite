import { observer } from 'mobx-react-lite'
import { todosStore } from '../../stores/todosStore'
import { MdDelete } from 'react-icons/md'
import styles from './DeleteButton.module.scss'

const DeleteButton = observer(({ id }: { id: string }) => {
  const { onDeleteTodo } = todosStore

  return (
    <button className={styles.button} onClick={() => onDeleteTodo(id)}>
      <MdDelete size={25} />
    </button>
  )
})

export default DeleteButton
