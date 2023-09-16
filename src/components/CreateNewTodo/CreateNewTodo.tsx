/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [body, setBody] = useState<any>('')
  const onFocus = () => setFocused(true)
  const [errorHint, setErrorHint] = useState<boolean>(false)

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

  useEffect(() => {
    if (!focused) {
      setErrorHint(false)
    }
  }, [focused])

  const handleClick = () => {
    if (body) {
      addTodos(title, body)
      setTitle('')
      setBody('')
    } else if (!body && focused) {
      setErrorHint(true)
    }
  }

  return (
    <div ref={containerRef} onFocus={onFocus} className={styles.container}>
      {focused && <Editor.Input onKeyDown={handleClick} value={title} onChange={(e: { target: { value: SetStateAction<string> } }) => setTitle(e.target.value)} />}
      <div className={styles.textareaContainer}>
        <Editor.Textarea
          errorHint={errorHint}
          value={body}
          onKeyDown={handleClick}
          onChange={(e: { target: { value: SetStateAction<string> } }) => setBody(e.target.value)}
          ref={textareaRef}
        />

        <Button disabled={!body} onClick={handleClick}>
          <IoMdAdd />
        </Button>
      </div>
    </div>
  )
}

export default CreateNewTodo
