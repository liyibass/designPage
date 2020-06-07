import React, { useEffect } from "react";
import "./Home.style.scss";
import Title from "../../components/Title/Title.component";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    let logo = document.querySelector(".home-logo");

    logo.addEventListener("mouseover", () => {
      console.log("hover");

      logo.classList.add("logo-clicked");
    });
  }, []);

  return (
    <div className="homePage page">
      <Link to="/About">
        <div className="home-logo">
          <i className="fab fa-codepen fa-9x"></i>
          <Title engTitle="Siwei" twnTitle="四維設計" />
        </div>
      </Link>
    </div>
  );
}

export default Home;
