import React from 'react';
import style from './ProjectInfo.module.scss';
import { Project } from '../../../types/project';
import Title from '../Title/Title';

type Props = {
  project: Project[];
  title: string;
}

const ProjectInfo: React.FC<Props> = ({ title, project }) => {

  return (
    <div className={style.section}>
      <Title title={title} />
      <ul className={style.list}>
        {project.map(item => (
          <li key={item.id} className={style.item}>
            <h3 className={style.subTitle}>{item.subTitle}</h3>
            <p className={style.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectInfo;