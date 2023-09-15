import { SetStateAction, useEffect, useRef, useState } from 'react'
import { Editor } from '../Editor/Editor'
import { IoMdAdd } from 'react-icons/io'
import { todosStore } from '../../stores/todosStore'
import styles from './CreateNewTodo.module.scss'
import Button from '../AddButton/AddButton'

const CreateNewTodo = () => {
  const { addTodos } = todosStore

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
    addTodos(title, body)
    setBody('')
    setTitle('')
    setFocused(false)
  }

  return (
    <div ref={containerRef} onFocus={onFocus} className={styles.container}>
      {focused && <Editor.Input value={title} onChange={(e: { target: { value: SetStateAction<string> } }) => setTitle(e.target.value)} />}
      <div className={styles.textareaContainer}>
        <Editor.Textarea value={body} onChange={(e: { target: { value: SetStateAction<string> } }) => setBody(e.target.value)} ref={textareaRef} />

        <Button disabled={!body} onClick={handleClick}>
          <IoMdAdd />
        </Button>
      </div>
    </div>
  )
}

export default CreateNewTodo
