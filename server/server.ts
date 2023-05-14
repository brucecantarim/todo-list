import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todos.ts';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Server is running. Go to "/api/todos" to make your requests.');
});

// Mount the todo routes
todoRoutes(app);

const instance = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export const server = app;
export const closeServer = instance.close;

