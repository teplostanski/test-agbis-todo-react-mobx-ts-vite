import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import Tabs from '../../ui/Tabs/Tabs'
import { TTab, TTabs } from '../../types'
import { todosStore } from '../../stores/todosStore'
import { useTranslation } from 'react-i18next'

const FilterTabs = observer(() => {
  const { t } = useTranslation()
  const tabs: TTabs[] = [
    { id: 0, label: t('tabLabelAll') },
    { id: 1, label: t('tabLabelActive') },
    { id: 2, label: t('tabLabelCompleted') },
  ]

  const [selectedId, setSelectedId] = useState(tabs[0].id)
  console.log(selectedId)

  useEffect(() => {
    todosStore.setSelectedTabId(selectedId)
  }, [selectedId])

  const handleTabClick = (id: TTab) => {
    setSelectedId(id)
  }

  return (
    <>
      <Tabs tabs={tabs} selectedId={selectedId} onClick={handleTabClick} />
    </>
  )
})

export default FilterTabs
