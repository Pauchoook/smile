export default function changeFile() {
  const inputs = document.querySelectorAll("input[type='file']");
  if (inputs.length) {
    inputs.forEach(input => {
      input.addEventListener("change", (e) => {
        const nameFile = e.target.value.split("\\").at(-1);
        const htmlValue = input.closest("label").querySelector(".file-value");
        if (nameFile) htmlValue.textContent = nameFile;
      })  
    })
  }
}