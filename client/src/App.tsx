import useTodos from './hooks/useTodos';
import styles from './App.module.css'

import ListHeader from './components/ListHeader';
import List from './components/List';
import AddItemInput from './components/AddItemInput';

function App() {
  const { completedTasks, incompletedTasks } = useTodos();

  return (
    <main className={styles.app}>
      <ListHeader name={'My Tasks'} button />
      <AddItemInput />
      <List name='Todos' todos={incompletedTasks} />
      <List name='Done' todos={completedTasks} />
    </main>
  )
}

export default App
