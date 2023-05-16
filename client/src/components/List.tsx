import React, { useContext, useEffect } from 'react';
import { TodoStateContext } from '../store/provider';
import { Todo } from '../store/types';
import ListHeader, { ListHeaderProps } from './ListHeader';
import ListItem from './ListItem';
import styles from './List.module.css';

interface ListProps extends ListHeaderProps { }

const List: React.FC<ListProps> = ({ name, button, callback }) => {
  const { incompletedTodos, completedTodos, filter } = useContext(TodoStateContext);

  const filteredTodos = name === 'Todos' ? incompletedTodos : completedTodos;
  const filteredList = filteredTodos && filteredTodos.filter((todo) =>
    todo.task.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    // Perform any additional logic or side effects based on filteredList if needed
  }, [filter, filteredList]);

  return (
    <div>
      <ListHeader name={name} button={button} callback={callback} />
      <div className={styles.container}>
        {filteredList.length > 0 ? (
          filteredList.map((item: Todo) => <ListItem key={item.id} item={item} />)
        ) : (
          name === 'Todos' ?
            'No tasks found! Create a new one or go enjoy your day.' :
            'No completed tasks yet. Work on your list and click the checkbox once it is done!'
        )}
      </div>
    </div>
  );
};

export default List;

