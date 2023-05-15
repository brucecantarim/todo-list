import { TodoState, Action } from './types';

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
    default:
      return state;
  }
};

export default reducer;
