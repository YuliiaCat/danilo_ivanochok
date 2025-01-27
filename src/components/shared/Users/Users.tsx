import React from 'react';
import Rhombus from '../Rhombus/Rhombus';
import Title from '../Title/Title';
import style from './Users.module.scss';
import { User } from '../../../types/user';
import classNames from 'classnames';
import Passages from '../Passages/Passages';

type Props = {
  data: User[];
  passageOne: string;
  passageTwo: string;
  trackingPage: boolean;
}

const Users: React.FC<Props> = ({ data, passageOne, passageTwo, trackingPage }) => {
  return (
    <div className={style.section}>
      <Title title='Our users' />
      <Passages
        passageOne={passageOne}
        passageTwo={passageTwo}
      />
      <ul className={style.list}>
        {data.map(user => (
          <li key={user.id} className={style.user}>
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
              {trackingPage ? (
                <Rhombus
                  className={classNames(style.itemRomb, {
                    [style.rightAligned]: user.id === 1,
                    [style.leftAligned]: user.id === 2,
                    [style.lastRhomb]: user.id === 3,
                  })}
                />
              ) : (
                <Rhombus
                  className={classNames(style.itemRomb, {
                    [style.rightAligned]: user.id === 1,
                    [style.lastRhomb]: user.id === 2,
                  })}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;