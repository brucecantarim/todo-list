export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
  createdAt: string;
  completedAt: string;
}

export interface TodoState {
  todos: Todo[];
  incompletedTodos: Todo[];
  completedTodos: Todo[];
  filter: string;
}

export interface Action {
  type: string;
  payload?: any;
}

