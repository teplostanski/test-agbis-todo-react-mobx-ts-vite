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
  currentSortSelectionOption: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  get sorted() {
    const copyTodos = this.todos.slice()
    const currentOption = this.currentSortSelectionOption

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
        lastModified: Date.now(),
        create: Date.now(),
      }
      //if (newTodo.id) {
      //  this.currentTodoId = newTodo.id
      //}
      //this.currentTodo = newTodo
      return [newTodo, ...todos]
    }

    this.todos = addTodo(this.todos)
  }

  setCurrentTodoId(id: string) {
    this.currentTodoId = id
    console.log(id)
  }

  getCurrentTodo(ids: string) {
    const getCurrentTodo = (todos: TTodos[], currentTodoId: string) => {
      return todos.find(({ id }: { id: string }) => id === currentTodoId)
    }
    this.currentTodo = getCurrentTodo(this.todos, ids)
    this.setCurrentTodoId(ids)
    //console.log(this.currentTodo.title);
  }

  onUpdateTodo = (updatedTodo: any) => {
    const updatedTodosArr = this.todos.map((note: any) => {
      if (note.id === updatedTodo.id) {
        return updatedTodo
      }

      return note
    })

    this.todos = updatedTodosArr
  }

  close = () => {
    this.currentTodoId = ''
  }

  onEditField = ({ field, value }: { field: string; value: any }) => {
    this.onUpdateTodo({
      ...this.currentTodo,
      [field]: value,
      lastModified: Date.now(),
    })
  }

  onDeleteTodo(todoId: string) {
    const removeTodo = (todos: TTodos[], ids: string): TTodos[] => todos.filter(({ id }: { id: string }) => id !== ids)
    this.todos = removeTodo(this.todos, todoId)
    if (this.currentTodoId !== '') {
      this.currentTodoId = ''
    }
  }

  changeBody(value: string) {
    return (this.currentTodo.body = value)
  }

  changeTitle(value: string) {
    return (this.currentTodo.title = value)
  }

  setCompleted(todoId: string) {
    this.todos.filter((todo) => (todo.id === todoId ? (todo.isChecked = !todo.isChecked) : null))
  }

  setCurrentSortSelectionOption = (option: any) => {
    this.currentSortSelectionOption = option
  }
}

const todosStore = new createTodosStore()
injectStores({
  todosStore,
})

export { todosStore }
