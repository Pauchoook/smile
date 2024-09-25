export default function more() {
  const buttons = document.querySelectorAll(".btn-more");
  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".parent-more");
        const contentMore = parent.querySelector(`.more`);

        parent.classList.add("show");
        contentMore.classList.remove("more");
        btn.remove();
      })
    })
  }
}