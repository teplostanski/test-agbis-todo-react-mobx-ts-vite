import { ChangeEventHandler, Ref, forwardRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
//import cn from 'classnames'
import styles from './Editor.module.scss'
import { useTranslation } from 'react-i18next'

/* eslint-disable @typescript-eslint/no-explicit-any */
const Input = ({ onChange, value, ...props }: { onClose: any; onChange: ChangeEventHandler<HTMLInputElement>; value: string | number | readonly string[] | undefined }) => {
  const { t } = useTranslation()

  return <input {...props} value={value} onChange={onChange} className={styles.input} type='text' placeholder={t('titlePlaceholder')} />
}

const Textarea = forwardRef(
  (
    {
      onChange,
      value,
      ...props
    }: {
      onClose: any
      onChange: ChangeEventHandler<HTMLTextAreaElement>
      value: string | number | readonly string[] | undefined
    },
    ref: Ref<HTMLTextAreaElement>,
  ) => {
    const { t } = useTranslation()

    return <TextareaAutosize ref={ref} {...props} value={value} onChange={onChange} className={styles.textarea} maxRows={20} placeholder={t('bodyPlaceholder')} />
  },
)

export const Editor = Object.assign({
  Input,
  Textarea,
})
