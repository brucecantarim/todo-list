import { Express, Request, Response, NextFunction } from 'express';
import TodoService from '../services/todo.ts';

export default function todoRoutes(app: Express): void {

  const todoService = new TodoService();

  app.get('/api/todos', async (_: Request, res: Response, next: NextFunction) => {
    try {
      const todos = todoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      next(error);
    }
  });

  app.get('/api/todos/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const todo = todoService.getTodoById(parseInt(id));
      if (todo) {
        res.json(todo);
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error) {
      next(error);
    }
  });

  app.post('/api/todos', async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req);
      const { task } = req.body;
      const newTodo = todoService.insertTodo(task);
      res.json(newTodo);
    } catch (error) {
      next(error);
    }
  });

  app.put('/api/todos/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { isCompleted } = req.body;
      const success = todoService.updateTodoStatus(parseInt(id), isCompleted);
      res.json({ success });
    } catch (error) {
      next(error);
    }
  });

  app.delete('/api/todos', async (_: Request, res: Response, next: NextFunction) => {
    try {
      const success = todoService.deleteAllTodos();
      res.json({ success });
    } catch (error) {
      next(error);
    }
  });

  app.delete('/api/todos/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const deletedTodo = todoService.deleteTodoById(parseInt(id));
      if (deletedTodo) {
        res.json(deletedTodo);
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error) {
      next(error);
    }
  });
}

