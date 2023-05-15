import useTodos from './hooks/useTodos';
import styles from './App.module.css'

import ListHeader from './components/ListHeader';
import List from './components/List';
import AddItemInput from './components/AddItemInput';

function App() {
  const { completedTodos, incompletedTodos } = useTodos();

  return (
    <main className={styles.app}>
      <ListHeader name={'My Tasks'} button />
      <AddItemInput />
      <List name='Todos' todos={incompletedTodos} />
      <List name='Done' todos={completedTodos} />
    </main>
  )
}

export default App
