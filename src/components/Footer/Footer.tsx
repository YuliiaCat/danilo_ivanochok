import { Link } from 'react-router-dom';
import Rhombus from '../shared/Rhombus/Rhombus';
import Title from '../shared/Title/Title';
import style from './Footer.module.scss';

const social = [
  { 
    id: 1,
    name: 'Connect on Linkedin',
    link: 'https://www.linkedin.com/in/danilo-ivanochok/'
  },
  { 
    id: 2,
    name: 'Contact me by Email',
    link: 'mailto: danilo.ivanochok@gmail.com'
  },
  { 
    id: 3,
    name: 'My work on Behance',
    link: 'https://www.behance.net/daniloivanochok1'
  },
  { 
    id: 4,
    name: 'Follow me on Instagram',
    link: 'https://www.instagram.com/_danilo_ivn_/'
  }
]

const Footer = () => {
  return (
    <footer className={style.section} id='contacts'>
      <div className={style.container}>
        <Title title='Contacts' />
        <p className={style.text}>Want to discuss a collaboration or share an idea? Reach out to me through social media — I’d be happy to hear from you !</p>
        <ul className={style.list}>
          {social.map(item => (
            <li key={item.id} className={style.item}>
              <Link to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={style.rightR}>
          <Rhombus />
        </div>
        <div className={style.leftR}>
          <Rhombus />
        </div>
      </div>
    </footer>
  );
}

export default Footer;