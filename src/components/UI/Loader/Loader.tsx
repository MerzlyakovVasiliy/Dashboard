import styles from './Loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.spinner}></div>
    </div>
  )
}