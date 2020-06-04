export class EventHandler {
  constructor() {
    // 取得html物件
    // this.boxSection = Array.prototype.slice.call(
    //   document.querySelectorAll(".box")
    // );
    // 執行eventHandler
    // this.boxAppear();

    this.menuButtonOn = document.querySelector(".menu-button-on");

    this.menuList = document.querySelector(".main-navbar-list");

    this.menuToggle();
  }

  menuToggle() {
    // console.log(this.menuButtonOn);

    // EventListener
    this.menuButtonOn.addEventListener("click", () => {
      this.menuList.classList.toggle("main-navbar-list-hide");
      this.menuButtonOn.classList.toggle("fa-bars");
      this.menuButtonOn.classList.toggle("fa-times");
    });
  }

  boxAppear() {
    const boxObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log("appear");
        // 如果目標未出現則return
        if (!entry.isIntersecting) return;
        // 目標完全出現則顯示
        entry.target.classList.add("box-appear");
        // 並且取消觀察
        boxObserver.unobserve(entry.target);
      });
    });

    this.boxSection.forEach((box) => {
      boxObserver.observe(box);
    });
  }
}
