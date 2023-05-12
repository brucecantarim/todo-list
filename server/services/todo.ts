import { Database as SqliteDatabase, Statement } from 'better-sqlite3';
import DatabaseManager from './database.ts';
import { Todo } from '../models/todos.ts';

class TodoService {
  private db: SqliteDatabase;
  private getAllQuery: Statement;
  private getByIdQuery: Statement;
  private insertQuery: Statement;
  private updateStatusQuery: Statement;
  private deleteAllQuery: Statement;
  private deleteByIdQuery: Statement;

  constructor() {
    this.db = DatabaseManager.getInstance();

    this.getAllQuery = this.db.prepare('SELECT * FROM todos ORDER BY task ASC');
    this.getByIdQuery = this.db.prepare('SELECT * FROM todos WHERE id = ?');
    this.insertQuery = this.db.prepare('INSERT INTO todos (task) VALUES (?)');
    this.updateStatusQuery = this.db.prepare('UPDATE todos SET isCompleted = ? WHERE id = ?');
    this.deleteAllQuery = this.db.prepare('DELETE FROM todos');
    this.deleteByIdQuery = this.db.prepare('DELETE FROM todos WHERE id = ?');
  }

  public getAllTodos(): Todo[] {
    return this.getAllQuery.all() as Todo[];
  }

  public getTodoById(id: number): Todo | undefined {
    const result = this.getByIdQuery.get(id) as Todo | undefined;

    if (result) {
      return {
        id: result.id,
        task: result.task,
        isCompleted: Boolean(result.isCompleted),
        createdAt: result.createdAt,
      };
    }

    return undefined;
  }

  public insertTodo(task: string): Todo {
    const result = this.insertQuery.run(task);
    const { lastInsertRowid: id } = result;
    return { id: id as number, task, isCompleted: false, createdAt: new Date().toISOString() };
  }

  public updateTodoStatus(id: number, isCompleted: boolean): boolean {
    const result = this.updateStatusQuery.run(isCompleted ? 1 : 0, id);
    return result.changes > 0;
  }

  public deleteAllTodos(): boolean {
    const result = this.deleteAllQuery.run();
    return result.changes > 0;
  }

  public deleteTodoById(id: number): Todo | undefined {
    const todo = this.getTodoById(id);
    if (todo) {
      this.deleteByIdQuery.run(id);
      return todo;
    }
    return undefined;
  }

  public close(): void {
    this.db.close();
  }
}

export default TodoService;

