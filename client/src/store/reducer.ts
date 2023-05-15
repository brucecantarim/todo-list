import { Todo, TodoState, Action } from './types';

const reducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload,
      };
    case 'SET_INCOMPLETED_TODOS':
      return {
        ...state,
        incompletedTodos: action.payload,
      };
    case 'SET_COMPLETED_TODOS':
      return {
        ...state,
        completedTodos: action.payload,
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
        incompletedTodos: [...state.incompletedTodos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload.id)],
        imcompletedTodos: [...state.incompletedTodos.filter(item => item.id !== action.payload.id)],
        completedTodos: [...state.completedTodos.filter(item => item.id !== action.payload.id)]
      };
    default:
      return state;
  }
};

export default reducer;
