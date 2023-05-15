import styles from './App.module.css';

import ListHeader from './components/ListHeader';
import List from './components/List';
import AddItemInput from './components/AddItemInput';

import TodoProvider from './store/provider';

function App() {
  return (
    <TodoProvider>
      <main className={styles.app}>
        <ListHeader name={'My Tasks'} button />
        <AddItemInput />
        <List name="Todos" />
        <List name="Done" />
      </main>
    </TodoProvider>
  );
}

export default App;

