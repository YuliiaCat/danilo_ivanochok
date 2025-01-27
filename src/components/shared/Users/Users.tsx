import React from 'react';
import Rhombus from '../Rhombus/Rhombus';
import Title from '../Title/Title';
import style from './Users.module.scss';
import { User } from '../../../types/user';

type Props = {
  data: User[];
  intro: string;
  goal: string;
  trackingPage: boolean;
}

const Users: React.FC<Props> = ({ data, intro, goal, trackingPage }) => {
  return (
    <div className={style.section}>
      <Title title='Our users' />
      <div className={style.info}>
        <p className={style.textInfo}>{intro}</p>
        <Rhombus className={style.rombR} />
        <p className={style.textInfo}>{goal}</p>
        <Rhombus className={style.rombL} />
      </div>
      <ul className={style.list}>
        {data.map(user => (
          <li key={user.id} className={trackingPage ? style.user : style.userMovies}>
            <img src={user.photo} alt="avatar" className={style.avatar} />
            <div className={style.about}>
              <div className={style.extraBlock}>
                <h3 className={style.name}>{user.name}</h3>
                <p className={style.text}>{user.about}</p>
              </div>
              <div className={style.extraBlock}>
                <h4 className={style.text}>JOBS-TO-BE-DONE</h4>
                <p className={style.text}>{user.jobs}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;