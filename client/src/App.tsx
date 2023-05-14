import { useState, useEffect, useMemo } from 'react';
import styles from './App.module.css'

import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import AddItemInput from './components/AddItemInput';

export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
  createdAt: string;
  completedAt: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/todos');
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };


  // TODO: Move this logic to the API
  const getIncompletedTodos = useMemo((): Todo[] => {
    return todos?.filter((todo: Todo) => todo.isCompleted === false)
      .sort((a: Todo, b: Todo) => a.id - b.id);
  }, [todos]);

  const getCompletedTodos = useMemo((): Todo[] => {
    return todos?.filter((todo: Todo) => todo.isCompleted === true)
      .sort((a: Todo, b: Todo) => {
        const completedAtA: any = new Date(a.completedAt);
        const completedAtB: any = new Date(b.completedAt);
        return completedAtA - completedAtB;
      });
  }, [todos]);

  useEffect(() => { getData() }, []);

  useEffect(() => { todos && console.table(todos) }, [todos]);

  return (
    <main className={styles.app}>
      <ListHeader name={'My Tasks'} />
      <AddItemInput />
      <h3>Todos</h3>
      {getIncompletedTodos?.map((item: Todo) => <ListItem key={item.id} item={item} />)}
      <br />
      <h3>Done</h3>
      {getCompletedTodos?.map((item: Todo) => <ListItem key={item.id} item={item} />)}
    </main>
  )
}

export default App
