import React from 'react';
import { Todo } from '../App';
import ListHeader, { ListHeaderProps } from './ListHeader';
import ListItem from './ListItem';

interface ListProps extends ListHeaderProps {
  todos: Todo[] | null;
}

const List: React.FC<ListProps> = ({ name, button, callback, todos }) => {
  return (
    <>
      <ListHeader name={name} button={button} callback={callback} />
      {todos ?
        todos.map((item: Todo) => <ListItem key={item.id} item={item} />) :
        'No tasks found! Create a new one or go enjoy your day.'}
    </>
  )
};

export default List;
