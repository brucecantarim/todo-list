import React from 'react';
import { Todo } from '../hooks/useTodos.ts';
import styles from './ListItem.module.css';
import { Delete } from 'react-feather';

export interface ListItemProps {
  item: Todo;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const { id, task, isCompleted, createdAt, completedAt } = item;

  return (
    <div className={styles.container}>
      <div>
        {!isCompleted && <input className={styles.checkbox} type='checkbox' />}
        {task}
      </div>
      <Delete className={styles.delete} />
    </div>
  );
};

export default ListItem;
