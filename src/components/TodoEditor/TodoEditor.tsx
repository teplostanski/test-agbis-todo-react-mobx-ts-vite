/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react-lite'
//import TextareaAutosize from 'react-textarea-autosize'
import { Modal } from '../Modal/Modal'
import { todosStore } from '../../stores/todosStore'
import cn from 'classnames'
import styles from './TodoEditor.module.scss'
import { useEffect, useState } from 'react'
import { Editor } from '../Editor/Editor'

const TodoEditor = observer(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentTodoId: isOpen, close, currentTodo, onUpdateTodo } = todosStore
  const [updatedTodo, setUpdatedTodo] = useState(currentTodo)
  useEffect(() => {
    setUpdatedTodo(currentTodo)
  }, [currentTodo])
  const handleUpdateTodo = () => {
    //console.log(updatedTodo)
    onUpdateTodo(updatedTodo)
    close()
  }

  const handleChange = (e: { target: { value: any } }, field: string) => {
    setUpdatedTodo({ ...updatedTodo, [field]: e.target.value })
    onUpdateTodo(updatedTodo)
  }

  return (
    <Modal.Overlay className={isOpen ? cn(styles.overlay, styles.active) : styles.overlay} onClose={handleUpdateTodo}>
      <Modal.Window className={styles.modal}>
        {/*<input value={updatedTodo.title} onChange={(e) => setUpdatedTodo({ ...currentTodo, title: e.target.value })} className={styles.input} type='text' placeholder='Заголовок' />*/}
        <Editor.Input value={updatedTodo.title} onChange={(e: { target: { value: any } }) => handleChange(e, 'title')} className={styles.input} />
        <div className={styles.textareaContainer}>
          {/*<TextareaAutosize
            value={updatedTodo.body}
            onChange={(e) => setUpdatedTodo({ ...currentTodo, body: e.target.value })}
            className={styles.textarea}
            style={{ width: '200px' }}
            maxRows={20}
            placeholder='Задача...'
          />*/}
          <Editor.Textarea value={updatedTodo.body} onChange={(e: { target: { value: any } }) => handleChange(e, 'body')} className={styles.textarea} style={{ width: '200px' }} />
          <button onClick={handleUpdateTodo}>dd</button>
        </div>
      </Modal.Window>
    </Modal.Overlay>
  )
})

export default TodoEditor
