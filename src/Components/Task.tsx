import { Trash, Check } from 'phosphor-react'
import styles from './Task.module.css'

interface Task {
  id: number;
  task: string;
  complete: boolean;
}

interface UpdatedArr {
  id: number;
  task: string;
  complete: boolean;
}

interface TaskProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function Task({task, onToggle, onDelete}:TaskProps) {  
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