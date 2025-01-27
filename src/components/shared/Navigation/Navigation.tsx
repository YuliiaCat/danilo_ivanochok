import React from 'react';
import style from './Navigation.module.scss';
import Rhombus from '../Rhombus/Rhombus';

type Props = {
  isMenu?: boolean;
  onClose?: () => void;
}

const links = [
  { id: 1, text: 'Portfolio', link: '#portfolio'},
  { id: 2, text: 'About me', link: '#about-me'},
  { id: 3, text: 'Contacts', link: '#contacts'},
]

const Navigation: React.FC<Props> = ({ isMenu, onClose }) => {
  

  return (
    <ul className={isMenu ? style.menuList : style.list}>
      {links.map(link => (
        <li key={link.id} className={!isMenu ? style.item : ''}>
          {!isMenu && <Rhombus isNavigation={true} />}
          <a 
            href={`/${link.link}`}
            className={isMenu ? style.menuLink : style.link}
            onClick={onClose}
            >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;