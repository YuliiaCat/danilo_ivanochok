import React from 'react';
import Navigation from '../shared/Navigation/Navigation';
import style from './Menu.module.scss';
import classNames from 'classnames';

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

const Menu: React.FC<Props> = ({ onClose, isOpen }) => {

  return (
    <div className={classNames(style.wrapper, {
      [style.open]: isOpen
    })}
    >
      <div className={style.box}>
        <Navigation isMenu={true} onClose={onClose} />
      </div>
    </div>
  );
}

export default Menu;