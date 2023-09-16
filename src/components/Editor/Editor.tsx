import { Ref, forwardRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styles from './Editor.module.scss'
import { useTranslation } from 'react-i18next'
import { TEditorInputProps, TEditorTextareaProps } from '../../types'

const useFocused = () => {
  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  return {
    focused,
    onBlur,
    onFocus,
  }
}

const Input = ({ onChange, value, onKeyDown, ...props }: TEditorInputProps) => {
  const { focused, onBlur, onFocus } = useFocused()
  const { t } = useTranslation()

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      onKeyDown()
    }
  }

  return (
    <div className={styles.textareaContainer}>
      <input
        {...props}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        onChange={onChange}
        className={styles.input}
        type='text'
        placeholder={t('titlePlaceholder')}
      />
      {focused && <div className={styles.hint}>{t('hintInput')}</div>}
    </div>
  )
}

const Textarea = forwardRef(({ onChange, value, onKeyDown, ...props }: TEditorTextareaProps, ref: Ref<HTMLTextAreaElement>) => {
  const { focused, onBlur, onFocus } = useFocused()
  const { t } = useTranslation()

  const handleKeyDown = (e: { shiftKey: boolean; key: string }) => {
    if (e.key === 'Enter' && e.shiftKey) {
      onKeyDown()
    }
  }

  return (
    <div className={styles.textareaContainer}>
      <TextareaAutosize
        ref={ref}
        {...props}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        className={styles.textarea}
        maxRows={20}
        placeholder={t('bodyPlaceholder')}
      />
      {focused && <div className={styles.hint}>{t('hintTextarea')}</div>}
    </div>
  )
})

export const Editor = Object.assign({
  Input,
  Textarea,
})
