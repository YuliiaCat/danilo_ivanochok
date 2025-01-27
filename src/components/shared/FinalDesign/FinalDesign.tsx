import React from 'react';
import style from './FinalDesign.module.scss';
import Title from '../Title/Title';
import { Page } from '../../../types/page';
import Passages from '../Passages/Passages';
import Rhombus from '../Rhombus/Rhombus';
import classNames from 'classnames';

type Props = {
  data: Page[];
  title: string;
  passageOne: string;
  passageTwo: string;
}

const FinalDesign: React.FC<Props> = ({ data, title, passageOne, passageTwo }) => {
  return (
    <div className={style.section}>
      <Title title={title} />
      <Passages
        passageOne={passageOne}
        passageTwo={passageTwo}
      />
      <ul className={style.list}>
        {data.map(image => (
          <li key={image.id} className={style.item}>
            <div className={style.extraBlock}>
              <h3 className={style.subTitle}>{image.title}</h3>
              <div className={style.content}>
                <p className={style.descr}>{image.description}</p>
                <Rhombus 
                  className={classNames(style.itemRomb, {
                    [style.rightAligned]: image.id % 2 !== 0,
                    [style.leftAligned]: image.id % 2 === 0,
                  })}
                />
              </div>
            </div>
            <img 
              src={image.image} 
              alt="image" 
              style={{ height: image.height }}
              className={style.imageMob} 
            />
            <img 
              src={image.image} 
              alt="image" 
              style={{ height: image.deskHeight, width: image.widthDesk }} 
              className={style.imageDesk} 
            />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default FinalDesign;