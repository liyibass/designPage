import React, { useEffect } from "react";
import "./styles/base/overall.scss";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import Content from "./components/Conternt/Content.component";
import { EventHandler } from "./scripts/EventHandler";
function App() {
  useEffect(() => {
    let ev = new EventHandler();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
