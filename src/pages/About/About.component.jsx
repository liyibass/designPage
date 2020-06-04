import React from "react";
import "./About.style.scss";
import Title from "../../components/Title/Title.component";

function About() {
  return (
    <div className="aboutPage page">
      <div className="about-subtitle">
        <Title engTitle="About" twnTitle="關於我們" />{" "}
      </div>
      <div className="about-switch">
        <i className="fab fa-facebook fa-9x"></i>
        <i className="fab fa-instagram-square fa-9x"></i>
      </div>
      <div className="about-content">
        <div className="about-content-text">
          <h3>四維設計是一間「資訊設計」公司</h3>
          <h4>我們注重「資訊在傳遞過程中的每一個細節」</h4>

          <p>
            四維設計於 2019 年
            12月成立，集結了包含企劃師、動畫師、平面設計師、網頁工程師...等10位夥伴。
            從策略規劃、資料架構、文案撰寫、設計執行到資訊投放，都是我們能提供的專業服務。
          </p>

          <p>
            我們的作品，會結合您想溝通的訊息、設計的美感，以及更多對受眾的理解。
            透過好設計，讓您的資訊飛得更遠。
            簡訊設計的接案原則為「正面」與「真實」
            正面：我們不做攻擊其他特定品牌的內容
            真實：我們堅持傳遞真實而無欺騙的資訊
          </p>

          <p> 若您有意合作，歡迎點擊聯絡我們！</p>
        </div>

        {/* <div className="about-content-other">
          <a href="">
            <Title engTitle="Works" twnTitle="作品集" />{" "}
          </a>
          <a href="">
            <Title engTitle="Team" twnTitle="團隊介紹" />{" "}
          </a>
          <a href="">
            <Title engTitle="Contact" twnTitle="一起合作吧" />{" "}
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default About;
