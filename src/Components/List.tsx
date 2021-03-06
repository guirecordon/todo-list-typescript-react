import {ClipboardText} from 'phosphor-react'
import { useState } from 'react'
import styles from './List.module.css'
import { Task } from './Task'

  interface Tasks {
    id: number;
    task: string;
    complete: boolean;
  }

  interface TasksProps {
    tasks: Tasks[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    taskCount: number;
    checkedTasks: number; 
  }

export function List({tasks, onToggle, onDelete, taskCount, checkedTasks}:TasksProps) {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <div className={`${styles.criadas} ${styles.counterContainer}`}>
          Tarefas criadas
          <span className={styles.counter}>{taskCount}</span>
        </div>
        <div className={`${styles.concluidas} ${styles.counterContainer}`}>
          Concluídas
          <span className={styles.counter}>{checkedTasks}</span>
        </div>
      </header>

      <div>
        {tasks.length > 0 ? (
          tasks.map(task => {
            return (
              <Task
                key={task.id} 
                task={task} 
                onToggle={onToggle} 
                onDelete={onDelete} 
              />
            )
            })
        ) : (
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
      )}
    </div>
    </div>
  )
}