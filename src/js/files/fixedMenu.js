export default function fixedMenu() {
  const btnSocial = document.querySelector("#fixed-social-btn");
  const menuSocial = document.querySelector("#fixed-social-menu");
  if (btnSocial) {
    btnSocial.addEventListener("click", () => {
      btnSocial.classList.toggle("active");
      menuSocial.classList.toggle("open");
    })
  }
}