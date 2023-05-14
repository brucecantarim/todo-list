import React from 'react';
import styles from './ListHeader.module.css';

export interface ListHeaderProps {
  name: string;
  button?: string;
  callback?: () => void;
}

const ListHeader: React.FC<ListHeaderProps> = ({ name, button, callback }) => {
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      {button && <button onClick={callback}>{button}</button>}
    </div>
  );
};

export default ListHeader
