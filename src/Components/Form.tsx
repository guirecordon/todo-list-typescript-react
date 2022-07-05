import {PlusCircle} from 'phosphor-react';

import styles from './Form.module.css'

export function Form() {
  return (
    <div>
      <form className={styles.form}>
        <input className={styles.input} placeholder="Adicionar uma nova tarefa" type="text" />
        <button>
          Criar 
          <PlusCircle size={16} weight='bold' />
        </button>
      </form>
    </div>
  )
}