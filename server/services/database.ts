import Database, { Database as SqliteDatabase } from 'better-sqlite3';

class DatabaseManager {
  private static instance: SqliteDatabase | null;

  private constructor() { }

  public static getInstance(): SqliteDatabase {
    if (!this.instance) {
      const env = process.env.NODE_ENV;
      const path = env === 'test' ? ':memory:' : 'data/todo.db';
      this.instance = new Database(path);
      this.instance.pragma('journal_mode = WAL');
      this.instance.exec(`
        CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          task TEXT,
          isCompleted BIT DEFAULT 0
        )
      `);
    }
    return this.instance;
  }

  public static close(): void {
    if (this.instance) {
      this.instance.close();
      this.instance = null;
    }
  }
}

export default DatabaseManager;

