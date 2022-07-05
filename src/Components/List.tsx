import {ClipboardText} from 'phosphor-react'
import styles from './List.module.css'
import { Task } from './Task'

export function List() {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <div className={`${styles.criadas} ${styles.counterContainer}`}>
          Tarefas criadas
          <span className={styles.counter}>0</span>
        </div>
        <div className={`${styles.concluidas} ${styles.counterContainer}`}>
          Concluídas
          <span className={styles.counter}>0</span>
        </div>
      </header>
      <div>
        <Task />

        <section className={styles.emptyBoard}>
            <div className={styles.boardMessage}>
              <ClipboardText size={56} color="var(--gray-400)" />
              <div className={styles.paragraphs}>
                <p 
                  className={styles.topLine}
                >
                  Você ainda não tem tarefas cadastradas
                </p>
                <p>
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>
            </div>
          </section>
      </div>
    </div>
  )
}