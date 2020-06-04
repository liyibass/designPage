import React from "react";
import "./Works.style.scss";
import Work from "../../components/Work/Work.component";

import animation from "../../images/animation.jpg";
import contentMarket from "../../images/contentMarket.jpg";
import socialContent from "../../images/socialMedia.jpg";
import webDesign from "../../images/webDesign.jpg";

function Works() {
  return (
    <div className="worksPage">
      <Work engTitle="ANIMATION" twnTitle="動畫" background={animation} />
      <Work
        engTitle="CONTENT MARKET"
        twnTitle="內容行銷"
        background={contentMarket}
      />
      <Work
        engTitle="SOCIAL CONTENT"
        twnTitle="社群專案"
        background={socialContent}
      />
      <Work engTitle="WEB DESIGN" twnTitle="網頁設計" background={webDesign} />
    </div>
  );
}

export default Works;
