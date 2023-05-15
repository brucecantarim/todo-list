import React, { useContext } from 'react';
import { Todo } from '../hooks/useTodos.ts';
import styles from './ListItem.module.css';
import { Delete } from 'react-feather';
import { TodoDispatchContext } from '../store/provider';
import { deleteTodo } from '../store/actions';

export interface ListItemProps {
  item: Todo;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const { id, task, isCompleted } = item;
  const dispatch = useContext(TodoDispatchContext);

  const handleDelete = () => {
    dispatch && deleteTodo(dispatch, id);
  };

  return (
    <div className={styles.container}>
      <div>
        {!isCompleted && <input className={styles.checkbox} type='checkbox' />}
        {task}
      </div>
      <div onClick={handleDelete}>
        <Delete className={styles.delete} />
      </div>
    </div>
  );
};

export default ListItem;

