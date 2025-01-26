import React from 'react';

type Icon = {
  icon: string;
  color?: string;
  className: string;
}

const Icon: React.FC<Icon> = ({ icon = '', color = '#000000', className }) => {
  return (
    <svg className={className} fill={color}>
      <use href={`img/sprite.svg#${icon}`}></use>
    </svg>
  );
}

export default Icon;