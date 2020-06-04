import React from "react";
import "./homepage.style.scss";
import { EventHandler } from "../../scripts/EventHandler";
import Component from "../../components/TopContainer/Component.component";

function Homepage() {
  let ev = new EventHandler();
  return (
    <div className="homepage">
      <Component />
    </div>
  );
}

export default Homepage;
