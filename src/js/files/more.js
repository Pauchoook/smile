export default function more() {
  const buttons = document.querySelectorAll(".btn-more");
  if (buttons.length) {
    buttons.forEach(btn => {
      const parent = btn.closest(".parent-more");
      const contentMore = parent.querySelector(`.more`);
      let heightRow = 24;
      if (window.matchMedia("(max-width: 743px)").matches) {
        heightRow = 21;
      }
      const countRows = Math.ceil(contentMore.clientHeight / heightRow);
      console.log(countRows)
      if (countRows < 9) btn.remove();
      
      btn.addEventListener("click", () => {

        parent.classList.add("show");
        contentMore.classList.remove("more");
        btn.remove();
      })
    })
  }
}