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
import { TArray } from '../../types'

const EditPopup = observer(() => {
  const { currentTodoId, isOpenEditPopup, setOpenEditPopup, close, currentTodo, onUpdateTodo } = todosStore
  const isOpen = currentTodoId && !!isOpenEditPopup
  const [updatedTodo, setUpdatedTodo] = useState<TArray>(currentTodo)
  const [errorHint, setErrorHint] = useState<boolean>(false)

  const { t } = useTranslation()

  useEffect(() => {
    setUpdatedTodo(currentTodo)
  }, [currentTodo])

  const handleUpdateTodo = () => {
    if (updatedTodo.body) {
      onUpdateTodo(updatedTodo)
      close()
      setOpenEditPopup(false)
    } else if (!updatedTodo.body) {
      setErrorHint(true)
    }
  }

  const handleChange = (e: { target: { value: any } }, field: string) => {
    setUpdatedTodo({ ...updatedTodo, [field]: e.target.value })
    onUpdateTodo(updatedTodo)
  }

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
            errorHint={errorHint}
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
