import React from 'react';
import style from './Passages.module.scss';
import Rhombus from '../Rhombus/Rhombus';

type Props = {
  passageOne: string;
  passageTwo: string;
  isChallenges?: boolean;
}

const Passages: React.FC<Props> = ({ passageOne, passageTwo, isChallenges }) => {
  return (
    <div className={isChallenges ? style.challenges : style.info}>
      <div className={style.parBlock}>
        <p className={style.textInfo}>{passageOne}</p>
        <Rhombus className={isChallenges ? '' : style.rombR} />
      </div>
      <div className={style.parBlock}>
        <p className={style.textInfo}>{passageTwo}</p>
        <Rhombus className={isChallenges ? style.rombL : ''} />
      </div>
    </div>
  );
}

export default Passages;