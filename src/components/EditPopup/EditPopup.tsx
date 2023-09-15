/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react-lite'
import { Modal } from '../Modal/Modal'
import { todosStore } from '../../stores/todosStore'
import cn from 'classnames'
import styles from './EditPopup.module.scss'
import { useEffect, useState } from 'react'
import { Editor } from '../Editor/Editor'

const EditPopup = observer(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentTodoId, isOpenEditPopup, setOpenEditPopup, close, currentTodo, onUpdateTodo } = todosStore
  const isOpen = currentTodoId && !!isOpenEditPopup
  const [updatedTodo, setUpdatedTodo] = useState(currentTodo)
  useEffect(() => {
    setUpdatedTodo(currentTodo)
  }, [currentTodo])
  const handleUpdateTodo = () => {
    onUpdateTodo(updatedTodo)
    close()
    setOpenEditPopup(false)
  }

  const handleChange = (e: { target: { value: any } }, field: string) => {
    setUpdatedTodo({ ...updatedTodo, [field]: e.target.value })
    onUpdateTodo(updatedTodo)
  }

  return (
    <Modal.Overlay className={isOpen ? cn(styles.overlay, styles.active) : styles.overlay} onClose={handleUpdateTodo}>
      <Modal.Window className={styles.modal}>
        <Editor.Input value={updatedTodo.title || ''} onChange={(e: { target: { value: any } }) => handleChange(e, 'title')} className={styles.input} />
        <div className={styles.textareaContainer}>
          <Editor.Textarea value={updatedTodo.body} onChange={(e: { target: { value: any } }) => handleChange(e, 'body')} className={styles.textarea} />
        </div>
        <button onClick={handleUpdateTodo}>Сохранить</button>
      </Modal.Window>
    </Modal.Overlay>
  )
})

export default EditPopup
