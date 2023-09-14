import { observer } from 'mobx-react-lite'
import CreateNewTodo from '../CreateNewTodo/CreateNewTodo'
import Dropdown from '../SortTodo/SortSelectionMenu'
import TodosList from '../TodoList/TodoList'
import TodoEditor from '../TodoEditor/TodoEditor'
import styles from './App.module.scss'
//import cn from 'classnames'

const App = observer(() => {
  return (
    <main className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>ToDo App</h1>
      </div>
      <CreateNewTodo />
      <Dropdown />
      <TodosList />
      <TodoEditor />
    </main>
  )
})

export default App
