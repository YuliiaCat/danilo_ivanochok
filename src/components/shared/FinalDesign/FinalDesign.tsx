import React from 'react';
import style from './FinalDesign.module.scss';
import Rhombus from '../Rhombus/Rhombus';
import Title from '../Title/Title';
import { Page } from '../../../types/page';

type Props = {
  data: Page[];
  title: string;
  passageOne?: string;
  passageTwo?: string;
}

const FinalDesign: React.FC<Props> = ({ data, title, passageOne, passageTwo }) => {
  return (
    <div className={style.section}>
      <Title title={title} />
      <div className={style.info}>
        <p className={style.text}>{passageOne}</p>
        <Rhombus className={style.right} />
        <p className={style.text}>{passageTwo}</p>
        <Rhombus className={style.left} />
      </div>
      <ul className={style.list}>
        {data.map(image => (
          <li key={image.id} className={style.item}>
            <div className={style.extraBlock}>
              <h3 className={style.subTitle}>{image.title}</h3>
              <p className={style.descr}>{image.description}</p>
            </div>
            <img src={image.image} alt="image" height={image.height} />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default FinalDesign;