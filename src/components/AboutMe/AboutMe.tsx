import Title from '../shared/Title/Title';
import style from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={style.section} id='about-me'>
      <div className={style.container}>
        <Title title='About me' />
          <div className={style.wrapper}>
          <p className={style.text}>I’m a UX/UI designer from Lviv, currently seeking 
          new opportunities. I specialize in designing and building digital products, as well as solving various problems within them using different methods, structures, and tools.</p>
          <p className={style.text}>I explored various fields but found my true calling in design. My constant growth and search for new ideas have always been supported by my ability to quickly learn new things, helping me adapt effectively and advance in my profession.</p>
          <p className={style.text}>I’m a big sports fan, especially streetlifting, and I’m always looking to improve my performance. In my free time, you can find me at the gym, focusing on my training, or in the kitchen, experimenting with new recipes and cooking various dishes.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;