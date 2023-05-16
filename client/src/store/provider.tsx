import React, { createContext, useReducer, useEffect } from 'react';

import { TodoState, Action } from './types';
import reducer from './reducer';
import { fetchTodos, fetchCompletedTodos, fetchIncompletedTodos } from './actions';

const initialState: TodoState = {
  todos: [],
  incompletedTodos: [],
  completedTodos: [],
  filter: '',
};

export const TodoStateContext = createContext<TodoState>(initialState);
export const TodoDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch todos data and dispatch actions to set the initial state
    fetchTodos(dispatch);
    fetchCompletedTodos(dispatch);
    fetchIncompletedTodos(dispatch);
  }, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider;

