import React, { useContext } from 'react';
import styles from './ListItem.module.css';
import { Delete } from 'react-feather';
import { Todo } from '../store/types';
import { TodoDispatchContext } from '../store/provider';
import { completeTodo, deleteTodo } from '../store/actions';

export interface ListItemProps {
  item: Todo;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const { id, task, isCompleted } = item;
  const dispatch = useContext(TodoDispatchContext);

  const handleComplete = () => {
    dispatch && completeTodo(dispatch, id);
  }

  const handleDelete = () => {
    dispatch && deleteTodo(dispatch, id);
  };

  return (
    <div className={styles.container}>
      <div>
        {!isCompleted && <input className={styles.checkbox} type='checkbox' onClick={handleComplete} />}
        {task}
      </div>
      <button className={styles.button} onClick={handleDelete}>
        <Delete />
      </button>
    </div>
  );
};

export default ListItem;

