import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.blue}>to</span>
      <span className={styles.purpleDark}>do</span>
    </header>
  )
}