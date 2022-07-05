import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.check}></div>
      <p className={styles.content}>This is my first task</p>
      <Trash size={24} color={'var(--gray-300)'} />
    </div>
  )
}