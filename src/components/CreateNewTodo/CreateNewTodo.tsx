import { useEffect, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { IoMdAdd } from 'react-icons/io'
import styles from './CreateNewTodo.module.scss'

const CreateNewTodo = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [focused, setFocused] = useState(false)
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

  return (
    <div ref={containerRef} onFocus={onFocus} className={styles.container}>
      {focused && <input className={styles.input} type='text' placeholder='Заголовок' />}
      <div className={styles.textareaContainer}>
        <TextareaAutosize className={styles.textarea} ref={textareaRef} style={{ width: '100%' }} maxRows={20} placeholder='Задача...' />
        {
          <button className={styles.buttonAdd} onClick={() => textareaRef.current && textareaRef.current.focus()}>
            <IoMdAdd />
          </button>
        }
      </div>
    </div>
  )
}

export default CreateNewTodo
