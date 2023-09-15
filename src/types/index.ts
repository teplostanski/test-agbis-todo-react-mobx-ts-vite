/* eslint-disable @typescript-eslint/no-explicit-any */

export type TGetSortedArray = {
  arr: any[]
  key?: string
  by?: 'asc' | 'desc'
}

export type TTodos = {
  id: string
  title: string
  body: string
  isChecked: boolean
  lastModified: number
  create: Date
}

export type TSortSelectionOptions = {
  values: string
  label: string
}
