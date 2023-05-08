import sqlite3 from 'sqlite3';

const DB_PATH = './data/todo.db';

export async function initializeDatabase(): Promise<void> {
  try {
    // Open the SQLite database
    const db = new sqlite3.Database(DB_PATH);

    // Create tables and perform any necessary setup
    db.exec(`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed INTEGER NOT NULL DEFAULT 0
      );
    `,
      (error) => {
        if (error) {
          console.error('Error creating tables:', error);
        } else {
          console.log('Tables created successfully.');

          // Add initial data if needed
          // db.exec(
          //   'INSERT INTO todos (title) VALUES ("Sample Todo")',
          //   (error) => {
          //     if (error) {
          //       console.error('Error adding initial data:', error);
          //     } else {
          //       console.log('Initial data added successfully.');
          //     }
          //   }
          // );

        }
      });

    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing the database:', error);
  }
}

