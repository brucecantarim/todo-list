import { useState, useEffect } from 'react';

export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
  createdAt: string;
  completedAt: string;
}

const URL = 'http://localhost:3000';

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [incompletedTodos, setIncompletedTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const getAllData = async () => {
    try {
      const response = await fetch(`${URL}/api/todos`);
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  /* Moved this logic moved to the API
   * but left here commented as an example of how to separate the
   * completed from the imcompleted tasks from one request only

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
  }, [todos]); */

  const getAllIncompletedTodos = async () => {
    try {
      const response = await fetch(`${URL}/api/todos?incompleted=true`);
      const data = await response.json();
      setIncompletedTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getAllCompletedTodos = async () => {
    try {
      const response = await fetch(`${URL}/api/todos?completed=true`);
      const data = await response.json();
      setCompletedTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { getAllData(); getAllIncompletedTodos(); getAllCompletedTodos(); }, []);

  useEffect(() => { todos && console.table(todos) }, [todos]);

  return {
    todos,
    incompletedTodos,
    completedTodos
  }
};

export default useTodos;
