import {PlusCircle} from 'phosphor-react';
import { useState } from 'react';

import styles from './Form.module.css'
import { List } from './List';

export function Form() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleInputChange({target}) {
    setValue(target.value);
    console.log(value);
  }

  function handleTaskCreate(event) {
    event.preventDefault()
    setTasks([...tasks, {id: tasks.length + 1, content: value}])
    console.log(tasks);
    setValue('');
  }
  
  return (
    <div>
      <form onSubmit={handleTaskCreate} className={styles.form}>
        <input onChange={handleInputChange} className={styles.input} placeholder="Adicionar uma nova tarefa" type="text" value={value} />
        <button>
          Criar 
          <PlusCircle size={16} weight='bold' />
        </button>
      </form>
      <List tasks={tasks} />
    </div>
  )
}