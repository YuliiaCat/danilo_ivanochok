import React, { useEffect } from 'react';
import Navigation from '../shared/Navigation/Navigation';
import style from './Menu.module.scss';
import classNames from 'classnames';

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

const Menu: React.FC<Props> = ({ onClose, isOpen }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const boxClassName = classNames(style.box, {
    [style.open]: isOpen,
  });

  return (
    <div className={classNames({ [style.wrapper]: isOpen })}>
      <div
        className={boxClassName}
      >
        <Navigation isMenu={true} onClose={onClose} />
      </div>
    </div>
  );
}

export default Menu;