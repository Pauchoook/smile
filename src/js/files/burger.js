export default function burger() {
  const burger = document.querySelector("#burger");
  const burgerBtn = document.querySelector("#burger-btn");
  const socialHeader = document.querySelector(".header__social");
  const navHeader = document.querySelector(".header__nav");
  const navWrapperFirst = burger.querySelector(".burger__wrapper");
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

        document.body.addEventListener("click", handleClose);
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

      return document.body.removeEventListener("click", handleClose);
    }
  }

  const buttonsNav = document.querySelectorAll(".btn-nav");

  if (buttonsNav.length) {
    buttonsNav.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idNav = btn.dataset.nav;
        const currentMenu = btn.closest(".nav");
        const nextMenu = document.querySelector(`.nav[data-nav="${idNav}"]`);

        currentMenu.classList.remove("open");
        nextMenu.classList.add("open");
      });
    });
  }
}
