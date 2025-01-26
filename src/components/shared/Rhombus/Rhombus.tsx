import style from './Rhombus.module.scss';

type Props = {
  isNavigation?: boolean;
  className?: string;
}

const Rhombus: React.FC<Props> = ({ isNavigation, className = '' }) => {
  return (
    <div className={`${className} ${isNavigation ? style.navi : style.box}`}></div>
  );
}

export default Rhombus;