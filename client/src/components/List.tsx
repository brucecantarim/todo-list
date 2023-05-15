import React, { useContext, useEffect } from 'react';
import { TodoStateContext } from '../store/provider';
import { Todo } from '../store/types';
import ListHeader, { ListHeaderProps } from './ListHeader';
import ListItem from './ListItem';
import styles from './List.module.css';

interface ListProps extends ListHeaderProps { }

const List: React.FC<ListProps> = ({ name, button, callback }) => {
  const { incompletedTodos, completedTodos } = useContext(TodoStateContext);

  const filteredTodos = name === 'Todos' ? incompletedTodos : completedTodos;

  useEffect(() => {
    // Perform any additional logic or side effects based on filteredTodos if needed
  }, [filteredTodos]);

  return (
    <>
      <ListHeader name={name} button={button} callback={callback} />
      <div className={styles.container}>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((item: Todo) => <ListItem key={item.id} item={item} />)
        ) : (
          'No tasks found! Create a new one or go enjoy your day.'
        )}
      </div>
    </>
  );
};

export default List;

