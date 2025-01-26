import Button from '../shared/Button/Button';
import Icon from '../shared/Icon/Icon';
import Title from '../shared/Title/Title';
import style from './Portfolio.module.scss';

const info = [
  { 
    id: 1,
    img: '/img/portfolio/tracking_app_mob.webp', 
    subtitle: 'Transaction Tracking App', 
    description: 'The project involves designing a financial management app that lets users track income, expenses, and balances, integrates with banks for transaction entry, offers reports, and supports budgeting and goal-setting—all with a focus on a user-friendly, intuitive interface.',
    link: '/tracking-app'
  },
  { 
    id: 2,
    img: 'img/portfolio/movies_platform_mob.webp', 
    subtitle: 'Movies Informational Platform', 
    description: 'A web application for searching and viewing information about movies and TV series. It provides details on ratings, reviews, trailers, cast, and other aspects, offering an intuitive and user-friendly interface for interacting with the content.',
    link: '/movies-info-platform'
  }
];

const Portfolio = () => {
  return (
    <div className={style.section} id='portfolio'>
      <div className={style.container}>
        <Title title='Portfolio' />
        <ul className={style.box}>
          {info.map(item => (
            <li className={style.item} key={item.id}>
              <img 
                src={item.img}
                alt="banner" 
                className={style.img} 
              />
              <div className={style.info}>
                <h3 className={style.subTitle}>{item.subtitle}</h3>
                <p className={style.descr}>{item.description}</p>
                <Button
                  to={item.link}
                  className={style.btn}
                >
                  <span>View Project</span>
                  <Icon icon='icon-arrow-left' className={style.icon} color={'#1a1a1a'} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;