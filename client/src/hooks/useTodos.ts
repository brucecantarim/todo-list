import { useState, useEffect, useMemo } from 'react';

export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
  createdAt: string;
  completedAt: string;
}

const useTodos = () => {
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
  const incompletedTasks = useMemo((): Todo[] => {
    return todos?.filter((todo: Todo) => todo.isCompleted === false)
      .sort((a: Todo, b: Todo) => a.id - b.id);
  }, [todos]);

  const completedTasks = useMemo((): Todo[] => {
    return todos?.filter((todo: Todo) => todo.isCompleted === true)
      .sort((a: Todo, b: Todo) => {
        const completedAtA: any = new Date(a.completedAt);
        const completedAtB: any = new Date(b.completedAt);
        return completedAtA - completedAtB;
      });
  }, [todos]);

  useEffect(() => { getData() }, []);

  useEffect(() => { todos && console.table(todos) }, [todos]);

  return {
    incompletedTasks,
    completedTasks
  }
};

export default useTodos;
