import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import CreateNewTodo from '../CreateNewTodo/CreateNewTodo'
import SortSelectionMenu from '../../ui/SortSelectionMenu/SortSelectionMenu'
import TodosList from '../List/List'
import EditPopup from '../EditPopup/EditPopup'
import styles from './App.module.scss'
import TranslateButton from '../../ui/TranslateButton/TranslateButton'
import FilterTabs from '../FilterTabs/FilterTabs'

const App = observer(() => {
  const { i18n } = useTranslation()

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language)
  }

  return (
    <main className={styles.app}>
      <section className={styles.wrapper}>
        <TranslateButton changeLanguage={changeLanguage} />
        <CreateNewTodo />
        <SortSelectionMenu />
        <TodosList />
        <FilterTabs />
        <EditPopup />
      </section>
    </main>
  )
})

export default App
