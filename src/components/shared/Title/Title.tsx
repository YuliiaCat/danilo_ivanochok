import React from "react";
import style from './Title.module.scss';

type Props = {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => <h2 className={style.title}>{title}</h2>;

export default Title;