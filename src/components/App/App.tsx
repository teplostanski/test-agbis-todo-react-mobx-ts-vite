import { observer } from 'mobx-react-lite'
import CreateNewTodo from '../CreateNewTodo/CreateNewTodo'
import SortSelectionMenu from '../SortSelectionMenu/SortSelectionMenu'
import TodosList from '../List/List'
import EditPopup from '../EditPopup/EditPopup'
import styles from './App.module.scss'
//import cn from 'classnames'

const App = observer(() => {
  return (
    <main className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>Todo app</h1>
      </div>
      <CreateNewTodo />
      <SortSelectionMenu />
      <TodosList />
      <EditPopup />
    </main>
  )
})

export default App
