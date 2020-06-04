import React from "react";
import "./Work.style.scss";

function Work({ engTitle, twnTitle, background }) {
  let divStyle = {
    backgroundImage: `url(${background})`,
  };
  // console.log(background);

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
