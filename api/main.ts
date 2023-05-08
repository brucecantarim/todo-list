import express from 'express';
import { initializeDatabase } from './db.ts';

const app = express()
const port = 3000

async function startServer() {
  // Initialize the Database
  await initializeDatabase();

  // Set up Express server and routes
  app.get('/', (_, res) => {
    res.send('Now listening...')
  })

  // Start the server
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

startServer();

