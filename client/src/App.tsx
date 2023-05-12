import { useState } from 'react';
import styles from './App.module.css'

import ListHeader from './components/ListHeader';

function App() {
  return (
    <main className={styles.app}>
      <ListHeader name={'My Tasks'} />
    </main>
  )
}

export default App
