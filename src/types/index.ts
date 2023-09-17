/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEventHandler } from 'react'

type TEditorProps = {
  value: string | number | readonly string[] | undefined
  onKeyDown: any
}

export type TEditorInputProps = TEditorProps & {
  onChange: ChangeEventHandler<HTMLInputElement>
}

export type TEditorTextareaProps = TEditorProps & {
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  errorHint: boolean
}

export type TGetSortedArray = {
  arr: TTodos[] | undefined
  key?: string
  by?: 'asc' | 'desc'
}

export type TArray = {
  [item: string]: any
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

export type TTab = string | number

export type TTabs = {
  id: TTab
  label: TTab
}

export type TTabsProps = {
  className?: { tabs: string; tab: { tab: string; selected: string }; label: { label: string; selected: string } }
  tabs: TTabs[]
  selectedId: TTab
  onClick: (id: TTab) => void
}
