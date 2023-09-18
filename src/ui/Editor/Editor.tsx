/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ref, forwardRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { BrowserView } from 'react-device-detect'
import styles from './Editor.module.scss'
import { useTranslation } from 'react-i18next'
import { TEditorInputProps, TEditorTextareaProps } from '../../types'
import { useFocused } from '../../hooks/useFocused'

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
      {value && focused && <div className={styles.hint}>{t('hintInput')}</div>}
    </div>
  )
}

const Textarea = forwardRef(({ onChange, value, onKeyDown, errorHint, ...props }: TEditorTextareaProps, ref: Ref<HTMLTextAreaElement>) => {
  const { focused, onBlur, onFocus } = useFocused()
  const { t } = useTranslation()

  const handleKeyDown = (e: { preventDefault(): unknown; shiftKey: boolean; key: string }) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault()
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

      <BrowserView>{value && focused && <div className={styles.hint}>{t('hintTextarea')}</div>}</BrowserView>

      {errorHint && !value && <div className={styles.errorHint}>{t('errorHintTextarea')}</div>}
    </div>
  )
})

export const Editor = Object.assign({
  Input,
  Textarea,
})
