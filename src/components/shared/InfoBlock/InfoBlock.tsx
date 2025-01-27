import Rhombus from '../Rhombus/Rhombus';
import Title from '../Title/Title';
import style from './InfoBlock.module.scss';

type Props = {
  title: string;
  text: string;
  className: string;
}

const InfoBlock: React.FC<Props> = ({ title, text, className }) => {
  return (
    <div className={style.section}>
      <Title title={title} />
      <div className={style.extraBlock}>
        <p className={style.text}>{text}</p>
        <Rhombus className={className} />
      </div>
    </div>
  );
}

export default InfoBlock;