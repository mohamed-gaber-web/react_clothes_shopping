import React from "react";

import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, size, history, match, linkUrl, urlImage }) => {
  // style="background-color: #fff" == css style
  // style={{ backgroundColor: #fff }} == react js style
  // inside className={ js code  }

  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${ urlImage })` }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {/* // /hats or /jacket */}
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="sub-title"> SHOP NOW </span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
