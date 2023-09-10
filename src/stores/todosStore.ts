/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from 'mobx'
import { injectStores } from '@mobx-devtools/tools'
import { nanoid } from 'nanoid'
import { initTodos } from '../constants'

export interface ITodos {
  id: string
  title: string
  body: string
  isChecked: boolean
  lastModified: number
  create: number
}

class createTodosStore {
  todos: ITodos[] = localStorage.todos ? JSON.parse(localStorage.todos) : initTodos
  currentTodoId: string = ''
  currentTodo: any = {}

  constructor() {
    makeAutoObservable(this)
  }

  addTodos = () => {
    const addTodo = (todos: ITodos[]): ITodos[] => {
      const newTodo: ITodos = {
        id: nanoid(),
        title: '',
        body: '',
        isChecked: false,
        lastModified: Date.now(),
        create: Date.now(),
      }
      if (newTodo.id) {
        this.currentTodoId = newTodo.id
      }
      this.currentTodo = newTodo
      return [newTodo, ...todos]
    }

    //this.todos = addTodos(this.todos, this.body);
    //this.body = '';

    //const addTodo = (
    //  todos: ITodos[],
    //  title: string,
    //  body: string
    //): ITodos[] => [
    //  {
    //    id: nanoid(),
    //    title,
    //    body,
    //    lastModified: Date.now(),
    //  },
    //  ...todos,
    //];
    this.todos = addTodo(this.todos)
  }

  setCurrentTodoId(id: string) {
    this.currentTodoId = id
    console.log(id)
  }

  getCurrentTodo(ids: string) {
    const getCurrentTodo = (todos: ITodos[], currentTodoId: string) => {
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
    const removeTodo = (todos: ITodos[], ids: string): ITodos[] => todos.filter(({ id }: { id: string }) => id !== ids)
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
}

const todosStore = new createTodosStore()
injectStores({
  todosStore,
})

export { todosStore }
