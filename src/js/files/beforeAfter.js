export default function beforeAfter() {
  const items = document.querySelectorAll(".before-after");
  if (items.length) {
    items.forEach((item) => {
      const images = item.querySelectorAll(".before-after__img");
      const beforeImage = images[1];
      const range = item.querySelector(".before-after__input");
      const handle = item.querySelector(".before-after__handle");

      beforeImage.style.width = `${range.value}%`;
      handle.style.left = `${range.value}%`;

      range.addEventListener("input", (e) => {
        beforeImage.style.width = `${e.target.value}%`;
        handle.style.left = `${e.target.value}%`;
      });
    });
  }
}
