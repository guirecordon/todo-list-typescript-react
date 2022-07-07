import { Trash, Check } from 'phosphor-react'
import styles from './Task.module.css'

export function Task({task, onToggle, onDelete}) {  
  return (
    <div className={styles.task}>
      <div
        onClick={() => onToggle(task.id)}
        className={`${styles.check} ${task.complete && styles.checkedOff}`}>
          {task.complete && <Check className={styles.icon} size={16} weight="bold" />}
      </div>
      <p className={`${styles.content} ${task.complete && styles.lineThrough}`}>
        {task.task}
      </p>
      <Trash 
        className={styles.trashIcon}
        onClick={() => onDelete(task.id)} 
        size={24}
      />
    </div>
  )
}