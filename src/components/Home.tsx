import React from 'react'
import styles from "./Home.module.css"
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { ITask } from './interfaces';

function Home() {
  const [stats, setStats] = useState<any>([]);
  const [todos, setTodos] = useState<ITask[]>([]);
  const [newTodo, setNewTodo] = useState<any>('');
  const [isCheck, setCheck] = useState(false);

  function handleChange(e: any) {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const IValue: ITask = {
      Title: newTodo,
      completed: true,
      id: 1
    }

    setTodos([...todos, IValue]);
    setNewTodo('');
    console.log(todos);
  }

  function Deleteitem(e: any) {
    setTodos(todos => todos.filter((item, i) => i !== e));
  };

  const CheckBox = (a:any) =>{    
    let newarr = stats;
    const value = newarr.indexOf(a.Title);
  
    if (value > -1) {
      newarr.splice(value, 1);
    } else {
      newarr.push(a.Title);
    }
    
    setStats(newarr);
    console.log(stats);

    setCheck(!isCheck)
  }

  return (
    <div>
      <div className={styles.div1}>
        <p>
          <h1>Todo List</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={(e) => handleChange(e)} />
            <button type="submit">Add Todo</button>
          </form>
        </p>
        <div className={styles.details}>
          {todos.map((a: any, index) => (
            <div key={index} className={styles.itemsdisplay}><p style={{ textDecoration : stats.indexOf(a.Title) > -1 ? 'line-through' : 'none' }}>
              {a.Title}
              <input
                type="checkbox"
                name="lang"
                onClick={()=>CheckBox(a)}
              />
              <GrClose className={styles.cross} onClick={() => Deleteitem(index)} /> </p> </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home