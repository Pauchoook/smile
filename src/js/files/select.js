export default function select() {
  const selects = document.querySelectorAll(".select");
  if (selects.length) {
    selects.forEach((select) => {
      const btnSelect = select.querySelector(".select__btn");
      const input = select.querySelector(".input");
      const itemsSelect = select.querySelectorAll(".select__item");

      itemsSelect.forEach((item) => {
        item.addEventListener("click", () => {
          input.value = item.textContent;
          handleClose();
        });
      });

      btnSelect.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (select.classList.contains("open")) {
          handleClose();
        } else {
          select.classList.add("open");
          document.body.addEventListener("click", handleClose);
        }
      });

      function handleClose() {
        select.classList.remove("open");

        document.body.removeEventListener("click", handleClose);
      }
    });
  }
}
