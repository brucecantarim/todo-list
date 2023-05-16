import styles from './App.module.css';

import ListHeader from './components/ListHeader';
import List from './components/List';
import AddItemInput from './components/AddItemInput';
import SearchBox from './components/SearchBox';

import TodoProvider from './store/provider';

function App() {
  return (
    <TodoProvider>
      <main className={styles.app}>
        <ListHeader name={'My Tasks'} button />
        <div className={styles.container}>
          <AddItemInput />
          <SearchBox />
        </div>
        <div className={styles.container}>
          <List name="Todos" />
          <List name="Done" />
        </div>
      </main>
    </TodoProvider>
  );
}

export default App;

