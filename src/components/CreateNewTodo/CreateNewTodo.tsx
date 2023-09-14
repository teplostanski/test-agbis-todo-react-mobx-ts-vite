import { useEffect, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { IoMdAdd } from 'react-icons/io'
import { todosStore } from '../../stores/todosStore'
import styles from './CreateNewTodo.module.scss'

const CreateNewTodo = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [focused, setFocused] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const onFocus = () => setFocused(true)

  useEffect(() => {
    /**
     * Проверяет является ли элемент в фокусе
     *
     * Я использую данный подход вместо потобного
     * onFocus подхода только с onBlur, потому что
     * данный подход проверяет есть ли фокус не только
     * на данном элементе, но и на дочерних
     */
    function handleClickOutside(event: { target: EventTarget | null }) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [containerRef])

  const handleClick = () => {
    todosStore.addTodos(title, body)
    setBody('')
    setTitle('')
    setFocused(false)
  }

  return (
    <div ref={containerRef} onFocus={onFocus} className={styles.container}>
      {focused && <input value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} type='text' placeholder='Заголовок' />}
      <div className={styles.textareaContainer}>
        <TextareaAutosize value={body} onChange={(e) => setBody(e.target.value)} className={styles.textarea} ref={textareaRef} style={{ width: '100%' }} maxRows={20} placeholder='Задача...' />
        {
          <button disabled={!body} className={styles.buttonAdd} onClick={handleClick}>
            <IoMdAdd />
          </button>
        }
      </div>
    </div>
  )
}

export default CreateNewTodo
