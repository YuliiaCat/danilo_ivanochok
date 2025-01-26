import React from 'react';
import { Image } from '../../../types/image';
import style from './Phones.module.scss';

type Props = {
  data: Image[];
  moviesPage: boolean;
}

const Phones: React.FC<Props> = ({ data, moviesPage }) => {
  return (
    <ul className={style.phones}>
      {data.map(image => (
        <li key={image.id} className={moviesPage ? style.item : ''}>
          <img src={image.url} alt="phone" className={ moviesPage ? style.template : style.phone } />
        </li>
      ))}
    </ul>
  );
}

export default Phones;