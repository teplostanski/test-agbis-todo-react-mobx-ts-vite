import { observer } from 'mobx-react-lite'
import CreateNewTodo from '../CreateNewTodo/CreateNewTodo'
import TodosList from '../TodoList/TodoList'
import styles from './App.module.scss'
//import cn from 'classnames'

const App = observer(() => {
  return (
    <main className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>ToDo App</h1>
      </div>
      <CreateNewTodo />
      <TodosList />
    </main>
  )
})

export default App