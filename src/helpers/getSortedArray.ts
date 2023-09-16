import { TGetSortedArray, TArray } from '../types'

export const getSortedArray = ({ arr, key, by = 'asc' }: TGetSortedArray) => {
  return arr.sort((a: TArray, b: TArray) => {
    const valueA = key ? a[key] : a
    const valueB = key ? b[key] : b
    return by === 'asc' || by === 'desc' ? (by === 'asc' ? Number(valueA > valueB) - Number(valueA < valueB) : Number(valueB > valueA) - Number(valueB < valueA)) : 0
  })
}
