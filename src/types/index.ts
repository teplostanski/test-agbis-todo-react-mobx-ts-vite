/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEventHandler } from 'react'

type TEditorProps = {
  value: string | number | readonly string[] | undefined
  onKeyDown: () => void
}

export type TEditorInputProps = TEditorProps & {
  onChange: ChangeEventHandler<HTMLInputElement>
}

export type TEditorTextareaProps = TEditorProps & {
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}

export type TGetSortedArray = {
  arr: any[]
  key?: string
  by?: 'asc' | 'desc'
}

export type TArray = {
  [item: string]: string | number
}

export type TTodos = {
  id: string
  title: string
  body: string
  isChecked: boolean
  dateCreate: number
  create: Date
}

export type TSortSelectionOptions = {
  values: string
  label: string
}

export type TFormatDate = {
  date?: Date | undefined | string | number
  sep?: string
}
