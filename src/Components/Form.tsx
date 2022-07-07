import {PlusCircle} from 'phosphor-react';
import { useEffect, useState } from 'react';
import styles from './Form.module.css'
import { List } from './List';

export function Form() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');
  const [taskCount, setTaskCount] = useState(0);
  const [checkedTasks, setCheckedTasks] = useState(0);

  useEffect(() => {
    setTaskCount(tasks.length);

    const completeList = tasks.filter(task => task.complete);
    setCheckedTasks(completeList.length);
  }, [tasks])

  function handleSubmit(event) {
    event.preventDefault();
    addTask(value);
    setValue('');
  }

  function handleToggle(id) {
    let mappedArray = tasks.map(task => {
      return task.id === id ? {...task, complete: !task.complete} : {...task}
    });

    setTasks(mappedArray);
  }

  function addTask(value) {
    let copy = [...tasks, { id: tasks.length + 1, task: value, complete: false}];    
    setTasks(copy);    
  }

  function handleChange({target}) {
    setValue(target.value);
  }

  function handleFilter(id) {
    let filtered = tasks.filter(task => {
      return task.id !== id;
    });
    setTasks(filtered);
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        className={styles.form}>
        <input
          onChange={handleChange}
          value={value}
          className={styles.input} 
          placeholder="Adicionar uma nova tarefa" 
          type="text" 
          required
        />

        <button>
          Criar 
          <PlusCircle size={16} weight='bold' />
        </button>
      </form>
      <List 
        tasks={tasks} 
        onToggle={handleToggle} 
        onDelete={handleFilter} 
        taskCount={taskCount}
        checkedTasks={checkedTasks}
      />
    </div>
  )
}