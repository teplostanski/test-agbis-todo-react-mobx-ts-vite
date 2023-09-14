import { TSortSelectionOptions } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const initTodos = [
  {
    id: 1694317846529,
    title: 'first todo',
    body: 'Lorem ipsum dolor sit amet',
    create: '10.12.2000',
    dateCreate: Date.parse('10.12.2000'),
    isChecked: true,
  },
  {
    id: 1694317846530,
    title: 'second todo',
    body: 'Pellentesque lacus magna, pellentesque sed velit nec.',
    create: '01.02.1999',
    dateCreate: Date.parse('01.02.1999'),
    isChecked: false,
  },
  {
    id: 1694317846531,
    title: 'third todo',
    body: 'Nulla auctor euismod lacus id rhoncus. Donec convallis eu.',
    create: '12.08.2008',
    dateCreate: Date.parse('12.08.2008'),
    isChecked: true,
  },
  {
    id: 1694317846532,
    title: 'fourth todo',
    body: 'Vestibulum tincidunt, neque et.',
    create: '03.04.2023',
    dateCreate: Date.parse('03.04.2023'),
    isChecked: false,
  },
]

export const sortSelectionOptions: TSortSelectionOptions[] = [
  { values: 'date-create-new', label: 'Дата создания: Новые' },
  { values: 'date-create-old', label: 'Дата создания: Старые' },
  { values: 'completed', label: 'Выполнено' },
  { values: 'not-completed', label: 'Не выполнено' },
]

export const colorStyles = {
  option: (styles: any, { isFocused }: any) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#e479cd' : '#21212b',
      color: isFocused ? '#21212b' : '#d2d2d3',
      borderColor: isFocused ? 'white' : 'pink',
    }
  },
}
