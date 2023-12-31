import { TFormatDate } from '../types'

export const getFormatDate = ({ date = new Date(), sep = '.' }: TFormatDate): string => {
  const localDate = new Date(date)

  let month = '' + (localDate.getMonth() + 1)
  let day = '' + localDate.getDate()
  const year = localDate.getFullYear()

  month.length < 2 ? (month = '0' + month) : null
  day.length < 2 ? (day = '0' + day) : null

  return [day, month, year].join(sep)
}
