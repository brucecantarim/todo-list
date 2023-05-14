import React from 'react';
import styles from './ListHeader.module.css';

interface ListHeaderProps {
  name: string;
}

const ListHeader: React.FC<ListHeaderProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <button>Delete all tasks</button>
    </div>
  );
};

export default ListHeader
