import React from "react";
import "./Title.style.scss";

function Title({ engTitle, twnTitle }) {
  return (
    <div className="Title">
      <h1>{engTitle}</h1>
      <h2>{twnTitle}</h2>
    </div>
  );
}

export default Title;
