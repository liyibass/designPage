import React from "react";
import "./Content.style.scss";
import About from "../../pages/About/About.component";
import Works from "../../pages/Works/Works.component";

import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Content() {
  // console.log(location);

  const timeout = {
    enter: 800,
    exit: 400,
  };
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={timeout}
        classNames="pageSlider"
        mountOnEnter={false}
        mountOnExit={true}
      >
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/works" component={Works} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Content;
