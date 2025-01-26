import style from './Image.module.scss';

type Props = {
  className?: string;
};

const Image: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`${style.box} ${className}`}></div>
  );
}

export default Image;