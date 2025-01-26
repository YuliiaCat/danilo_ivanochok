import style from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.picture}>
        <img 
          src='/img/homepage/danilo.webp' 
          alt="avatar" 
          className={style.img} 
        />
      </div>
      <h1 className={style.titleMob}>
        Hi, I'm Danilo 
        <br />
        Ivanochok, a 
        <br />
        designer from Ukraine specializing in UX/UI design. I craft clean, user experiences
      </h1>
      <h1 className={style.titleDesk}>
        Hi, I'm Danilo Ivanochok,
        <br />
         a designer from Ukraine
        <br />
        specializing in UX/UI design. I craft
        <br />
        clean, enjoyable user experiences
      </h1>
    </div>
  );
}

export default Hero;