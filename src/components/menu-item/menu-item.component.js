import React from "react";
import { useHistory } from "react-router-dom";
import "./meunu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const { push } = useHistory();
  return (
    <div className={`${size} menu-item`} onClick={(e) => push(linkUrl)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
