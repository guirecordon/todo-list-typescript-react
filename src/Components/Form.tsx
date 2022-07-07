import {PlusCircle} from 'phosphor-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from './Form.module.css'
import { List } from './List';


interface Task {
  id: number;
  task: string;
  complete: boolean;
}

export function Form() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState('');
  const [taskCount, setTaskCount] = useState(0);
  const [checkedTasks, setCheckedTasks] = useState(0);


  useEffect(() => {
    setTaskCount(tasks.length);

    const completeList = tasks.filter(task => task.complete);
    setCheckedTasks(completeList.length);
  }, [tasks])

  function handleSubmit(event:FormEvent) {
    event.preventDefault();
    addTask(value);
    setValue('');
  }

  function handleToggle(id:number) {
    let mappedArray = tasks.map(task => {
      return task.id === id ? {...task, complete: !task.complete} : {...task}
    });

    setTasks(mappedArray);
  }

  function addTask(value:string) {
    let copy = [...tasks, { id: tasks.length + 1, task: value, complete: false}];    
    setTasks(copy);    
  }

  function handleChange(event:ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleFilter(id: number) {
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