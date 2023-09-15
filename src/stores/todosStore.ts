/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from 'mobx'
import { injectStores } from '@mobx-devtools/tools'
import { nanoid } from 'nanoid'
import { getSortedArray } from '../helpers/getSortedArray'
import { initTodos } from '../constants'
import { TTodos } from '../types'

class createTodosStore {
  todos: TTodos[] = localStorage.todos ? JSON.parse(localStorage.todos) : initTodos
  currentTodoId: string = ''
  currentTodo: any = {}
  sortSelectionOption: string = ''
  isOpenEditPopup: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  get sorted() {
    const copyTodos = this.todos.slice()
    const currentOption = this.sortSelectionOption

    if (currentOption === 'date-create-new') {
      return getSortedArray({ arr: copyTodos, key: 'dateCreate', by: 'desc' })
    } else if (currentOption === 'date-create-old') {
      return getSortedArray({ arr: copyTodos, key: 'dateCreate', by: 'asc' })
    } else if (currentOption === 'completed') {
      return getSortedArray({ arr: copyTodos, key: 'isChecked', by: 'desc' })
    } else if (currentOption === 'not-completed') {
      return getSortedArray({ arr: copyTodos, key: 'isChecked', by: 'asc' })
    }
  }

  addTodos = (title: string, body: string) => {
    const addTodo = (todos: TTodos[]): TTodos[] => {
      const newTodo: TTodos = {
        id: nanoid(),
        title,
        body,
        isChecked: false,
        dateCreate: Date.now(),
        create: new Date(),
      }
      return [newTodo, ...todos]
    }

    this.todos = addTodo(this.todos)
  }

  setCurrentTodoId(id: string) {
    this.currentTodoId = id
  }

  getCurrentTodo(ids: string) {
    const getCurrentTodo = (todos: TTodos[], currentTodoId: string) => {
      return todos.find(({ id }: { id: string }) => id === currentTodoId)
    }
    this.currentTodo = getCurrentTodo(this.todos, ids)
    this.setCurrentTodoId(ids)
  }

  onUpdateTodo = (currentTodo: any) => {
    const updatedTodosArr = this.todos.map((note: any) => {
      if (note.id === currentTodo.id) {
        return currentTodo
      }

      return note
    })

    this.todos = updatedTodosArr
  }

  close = () => {
    this.currentTodoId = ''
  }

  onDeleteTodo = (todoId: string) => {
    const removeTodo = (todos: TTodos[], ids: string): TTodos[] => todos.slice().filter(({ id }: { id: string }) => id !== ids)
    this.todos = removeTodo(this.todos, todoId)
    if (this.currentTodoId !== '') {
      this.currentTodoId = ''
    }
  }

  setCompleted(todoId: string) {
    this.todos.filter((todo) => (todo.id === todoId ? (todo.isChecked = !todo.isChecked) : null))
  }

  setSortSelectionOption = (option: any) => {
    this.sortSelectionOption = option
  }

  setOpenEditPopup = (value: boolean) => {
    this.isOpenEditPopup = value
  }
}

const todosStore = new createTodosStore()
injectStores({
  todosStore,
})

export { todosStore }
