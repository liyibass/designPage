import React from "react";
import "./Content.style.scss";
import About from "../../pages/About/About.component";
import Works from "../../pages/Works/Works.component";

import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Content() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={2000}
            classNames="fade"
            in={true}
          >
            <div className="main-content">
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/works" component={Works} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    ></Route>
  );
}

export default Content;
