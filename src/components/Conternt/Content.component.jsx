import React from "react";
import "./Content.style.scss";
import About from "../../pages/About/About.component";
import Works from "../../pages/Works/Works.component";
import Contact from "../../pages/Contact/Contact.component";

import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "../../pages/Home/Home.component";

function Content() {
  return (
    <div className="main-content">
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={1000}
              classNames="fade"
              in={true}
            >
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/About" component={About} />
                <Route exact path="/works" component={Works} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      ></Route>
    </div>
  );
}

export default Content;
