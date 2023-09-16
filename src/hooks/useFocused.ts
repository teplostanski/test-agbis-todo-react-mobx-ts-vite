import { useState } from 'react'

export const useFocused = () => {
  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  return {
    focused,
    onBlur,
    onFocus,
  }
}
