/* eslint-disable @typescript-eslint/no-explicit-any */
export const initTodos = [
  {
    id: 1694317846529,
    title: 'first todo',
    body: 'Lorem ipsum dolor sit amet',
    create: new Date(2000, 11, 10),
    dateCreate: Date.parse('10.12.2000'),
    isChecked: true,
  },
  {
    id: 1694317846530,
    title: 'second todo',
    body: 'Pellentesque lacus magna, pellentesque sed velit nec.',
    create: new Date(1999, 1, 1),
    dateCreate: Date.parse('01.02.1999'),
    isChecked: false,
  },
  {
    id: 1694317846531,
    title: 'third todo',
    body: 'Nulla auctor euismod lacus id rhoncus. Donec convallis eu.',
    create: new Date(2008, 7, 12),
    dateCreate: Date.parse('12.08.2008'),
    isChecked: true,
  },
  {
    id: 1694317846532,
    title: 'fourth todo',
    body: 'Vestibulum tincidunt, neque et.',
    create: new Date(2023, 3, 3),
    dateCreate: Date.parse('03.04.2023'),
    isChecked: false,
  },
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
