import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import CreateNewTodo from '../CreateNewTodo/CreateNewTodo'
import SortSelectionMenu from '../../ui/SortSelectionMenu/SortSelectionMenu'
import TodosList from '../List/List'
import EditPopup from '../EditPopup/EditPopup'
import styles from './App.module.scss'
import TranslateButton from '../../ui/TranslateButton/TranslateButton'
//import cn from 'classnames'

const App = observer(() => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language)
  }

  return (
    <main className={styles.app}>
      <div className={styles.translateButtons}>
        <TranslateButton changeLanguage={changeLanguage} />
      </div>
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
