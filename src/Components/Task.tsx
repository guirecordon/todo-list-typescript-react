import { Trash, Check } from 'phosphor-react'
import { useState } from 'react';

import styles from './Task.module.css'

export function Task() {
  const [check, setCheck] = useState(false);

  function handleCheckOff() {
    setCheck(!check);
    console.log(check);
    
  }


  return (
    <div className={styles.task}>
      <div 
        onClick={handleCheckOff} 
        className={`${styles.check} ${check && styles.checkedOff}`}>
          {check && <Check className={styles.icon} size={16} weight="bold" />}
      </div>
      <p className={`${styles.content} ${check && styles.lineThrough}`}>This is my first task</p>
      <Trash size={24} color={'var(--gray-300)'} />
    </div>
  )
}