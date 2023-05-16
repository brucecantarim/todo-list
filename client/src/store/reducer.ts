import { TodoState, Action } from './types';

/* Here are a few considerations about this implementation:
 * I had the state separated into todos, incompletedTodos and completedTodos
 * and there are some extra work to keep them updated here.
 * Normally I would only have all todos stored, and separate
 * between incomplete and complete todos in the frontend.
 * But I took this extra step so we could keep the business logic more
 * centered in the api. In the case this impacts too much the
 * performance and scalability of the application, this is a point that
 * can be revised. */

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
    case 'COMPLETE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload.id)],
        incompletedTodos: [...state.incompletedTodos.filter(item => item.id !== action.payload.id)],
        completedTodos: [...state.completedTodos, action.payload]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.payload.id)],
        imcompletedTodos: [...state.incompletedTodos.filter(item => item.id !== action.payload.id)],
        completedTodos: [...state.completedTodos.filter(item => item.id !== action.payload.id)]
      };
    case 'DELETE_TODOS':
      return {
        ...state,
        todos: [],
        incompletedTodos: [],
        completedTodos: []
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
