import Rhombus from '../Rhombus/Rhombus';
import Title from '../Title/Title';
import style from './Challenges.module.scss';

type Props = {
  passageOne?: string;
  passageTwo?: string;
}

const Challenges: React.FC<Props> = ({ passageOne, passageTwo }) => {
  return (
    <div className={style.section}>
      <Title title='Challenges' />
      <div className={style.box}>
        <p className={style.text}>{passageOne}</p>
        <Rhombus className={style.rhomb}/>
        <p className={style.text}>{passageTwo}</p>
      </div>
    </div>
  );
}

export default Challenges;