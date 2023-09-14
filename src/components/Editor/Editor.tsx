import TextareaAutosize from 'react-textarea-autosize'

/* eslint-disable @typescript-eslint/no-explicit-any */
const Input = ({
  className,
  onChange,
  value,
  ...props
}: {
  onClose: any
  className: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string | number | readonly string[] | undefined
}) => {
  return <input {...props} value={value} onChange={onChange} className={className} type='text' placeholder='Заголовок' />
}

const Textarea = ({
  className,
  onChange,
  value,
  ...props
}: {
  onClose: any
  className: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
  value: string | number | readonly string[] | undefined
}) => {
  return <TextareaAutosize {...props} value={value} onChange={onChange} className={className} style={{ width: '200px' }} maxRows={20} placeholder='Задача...' />
}

export const Editor = Object.assign({
  Input,
  Textarea,
})
