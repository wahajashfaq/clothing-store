import React from "react";
import './meunu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
        <div className={`${size} menu-item`}>
        <div 
            className="background-image"
            style={{backgroundImage: `url(${imageUrl})` }}
        />
        <div className='content'>
          <div className='title'>{title}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
)


export default MenuItem;