export default function burger() {
  const burger = document.querySelector("#burger");
  const burgerBtn = document.querySelector("#burger-btn");
  const socialHeader = document.querySelector(".header__social");
  const navHeader = document.querySelector(".header__nav");
  const navWrapperFirst = burger.querySelector(".burger__wrapper");

  const burgerOverlayHtml = `
  <div class="burger__overlay">
      <div class="burger__overlay-wrapper"></div>
    </div>
  `;

  if (burger) {
    burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (!burger.classList.contains("open")) {
        burger.classList.add("open");
        burger.addEventListener("click", (e) => e.stopPropagation());
        burgerBtn.classList.add("active");
        socialHeader.classList.add("open");
        navHeader.classList.add("show");
        navWrapperFirst.classList.add("open");
        document.body.classList.add("body-hidden");
        document.body.insertAdjacentHTML("beforeEnd", burgerOverlayHtml);

        const burgerOverlay = document.querySelector(".burger__overlay");
        setTimeout(() => {
          burgerOverlay.classList.add("open");
        }, 100);

        burgerOverlay.addEventListener("click", handleClose);
      } else {
        handleClose();
      }
    });

    function handleClose() {
      burger.classList.remove("open");
      burgerBtn.classList.remove("active");
      socialHeader.classList.remove("open");
      navHeader.classList.remove("show");
      navWrapperFirst.classList.remove("open");
      document.body.classList.remove("body-hidden");

      const burgerOverlay = document.querySelector(".burger__overlay");
      burgerOverlay.remove();
      document.querySelectorAll(".nav-menu").forEach((menu) => menu.classList.remove("open"));

      return burgerOverlay.removeEventListener("click", handleClose);
    }

    function updateHeightBurger() {
      const heightHeader = document.querySelector(".header").clientHeight;
      const height = window.visualViewport.height - heightHeader;

      burger.style.height = `${height}px`;
    }

    window.visualViewport.addEventListener("resize", updateHeightBurger);
    window.visualViewport.addEventListener("scroll", updateHeightBurger);

    updateHeightBurger();
  }

  const buttonsNav = document.querySelectorAll(".btn-nav");

  if (buttonsNav.length) {
    buttonsNav.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idNav = btn.dataset.nav;
        const currentMenu = btn.closest(".nav-menu");
        const nextMenu = document.querySelector(`.nav-menu[data-nav="${idNav}"]`);

        currentMenu.classList.remove("open");
        nextMenu.classList.add("open");
      });
    });
  }
}
