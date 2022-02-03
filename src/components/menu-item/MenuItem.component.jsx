import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({title, image, size}) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={`${size} menu-item`}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
};

export default MenuItem;
