import { Link } from 'react-router-dom';
import Icon from '../shared/Icon/Icon';
import style from './Header.module.scss';
import Button from '../shared/Button/Button';
import Navigation from '../shared/Navigation/Navigation';

type Props = {
  isOpen: boolean;
  openMenu: () => void;
  onClose: () => void;
}

const Header: React.FC<Props> = ({ isOpen, openMenu, onClose }) => {
  return (
    <div className={!isOpen ? style.box : style.menuOpen}>
      <Link to={'/'}>
        <img className={style.logo} src="/img/logo.png" alt="logo" />
      </Link>

      {!isOpen ? (
        <Button
          buttonType='button'
          className={style.btn}
          onClick={openMenu}
        >
          <Icon className={style.icon} icon='icon-burger' />
        </Button>
      ) : (
        <Button
          buttonType='button'
          className={style.btn}
          onClick={onClose}
        >
          <Icon className={style.iconClose} icon='icon-close' />
        </Button>
      )}

      <Navigation />
      
    </div>
  );
}

export default Header;