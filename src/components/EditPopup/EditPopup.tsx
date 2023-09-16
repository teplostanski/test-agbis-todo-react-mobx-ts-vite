/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { todosStore } from '../../stores/todosStore'
import { Editor } from '../Editor/Editor'
import { Modal } from '../Modal/Modal'
import AddButton from '../AddButton/AddButton'
import styles from './EditPopup.module.scss'
import { useTranslation } from 'react-i18next'

const EditPopup = observer(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentTodoId, isOpenEditPopup, setOpenEditPopup, close, currentTodo, onUpdateTodo } = todosStore
  const isOpen = currentTodoId && !!isOpenEditPopup
  const [updatedTodo, setUpdatedTodo] = useState(currentTodo)

  const { t } = useTranslation()

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

  //const log = () => {
  //  console.log('key down')
  //}

  return (
    <Modal.Overlay className={isOpen ? cn(styles.overlay, styles.active) : styles.overlay} onClose={handleUpdateTodo}>
      <Modal.Window className={styles.modal}>
        <Modal.Close className={styles.close} onClose={handleUpdateTodo} />
        <Editor.Input
          onKeyDown={handleUpdateTodo}
          value={updatedTodo.title || ''}
          onChange={(e: { target: { value: any } }) => handleChange(e, 'title')}
          className={styles.input}
        />
        <div className={styles.textareaContainer}>
          <Editor.Textarea
            onKeyDown={handleUpdateTodo}
            value={updatedTodo.body}
            onChange={(e: { target: { value: any } }) => handleChange(e, 'body')}
            className={styles.textarea}
          />
        </div>
        <AddButton onClick={handleUpdateTodo}>{t('saveButton')}</AddButton>
      </Modal.Window>
    </Modal.Overlay>
  )
})

export default EditPopup
