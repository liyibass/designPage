import React, { useState } from "react";

import "./Work.style.scss";

import animation from "../../images/animation.jpg";
import contentMarket from "../../images/contentMarket.jpg";
import socialContent from "../../images/socialMedia.jpg";
import webDesign from "../../images/webDesign.jpg";

function Work({ engTitle, twnTitle, background }) {
  const divStyle = {
    backgroundImage: `url(${background})`,
    // backgroundColor: "red",
    // backgroundImage: "url(../../images/animation.jpg)",
  };

  return (
    <div className="work">
      <div className="work-title">
        <h3>{engTitle}</h3>
        <h4>{twnTitle}</h4>
      </div>

      <div className="work-background" style={divStyle}></div>
      <div className="work-slideIn"></div>
    </div>
  );
}

export default Work;
