import React from 'react';
import { Todo } from '../App.tsx';
import styles from 'ListItem.module.css';

export interface ListItemProps {
  item: Todo;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const { id, task, isCompleted, createdAt, completedAt } = item;

  return (
    <div>
      {task}
    </div>
  );
};

export default ListItem;
