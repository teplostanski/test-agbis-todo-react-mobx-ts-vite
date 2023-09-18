import styles from './TranslateButton.module.scss'

const TranslateButton = ({ changeLanguage }: { changeLanguage: (language: string | undefined) => void }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => changeLanguage('en')}>
        EN
      </button>
      <button className={styles.button} onClick={() => changeLanguage('ru')}>
        RU
      </button>
    </div>
  )
}

export default TranslateButton
