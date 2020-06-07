import React, { useState } from "react";
import "./Works.style.scss";

import "./Work/Work.style.scss";

import animation from "../../images/animation.jpg";
import contentMarket from "../../images/contentMarket.jpg";
import socialContent from "../../images/socialMedia.jpg";
import webDesign from "../../images/webDesign.jpg";

import { CSSTransition, TransitionGroup } from "react-transition-group";

function Works() {
  const works = [
    {
      id: 1,
      engTitle: "ANIMATION",
      twnTitle: "動畫",
      background: animation,
    },
    {
      id: 2,
      engTitle: "CONTENT MARKET",
      twnTitle: "內容行銷",
      background: contentMarket,
    },
    {
      id: 3,
      engTitle: "SOCIAL CONTENT",
      twnTitle: "社群專案",
      background: socialContent,
    },
    {
      id: 4,
      engTitle: "WEB DESIGN",
      twnTitle: "網頁設計",
      background: webDesign,
    },
  ];
  const [showWork, setShowWork] = useState(works);

  return (
    <div className="worksPage">
      {showWork.map((work) => {
        return (
          <div
            className="work"
            key={work.id}
            onClick={() =>
              setShowWork((works) =>
                works.filter((item) => item.id === work.id)
              )
            }
          >
            <div className="work-title">
              <h3>{work.engTitle}</h3>
              <h4>{work.twnTitle}</h4>
            </div>

            <div
              className="work-background"
              style={{
                backgroundImage: `url(${work.background})`,
              }}
            ></div>
            <div className="work-slideIn"></div>
          </div>
        );
      })}
      <div className="worksMenu" onClick={() => setShowWork(works)}>
        <i className="far fa-caret-square-down fa-4x"></i>
      </div>
    </div>
  );
}

export default Works;
