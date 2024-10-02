import AirDatepicker from "air-datepicker";

export default function date() {
  const inputsDate = document.querySelectorAll(".input-date");
  if (inputsDate.length) {
    inputsDate.forEach(input => {
      const dateInput = new AirDatepicker(input, {
        onSelect: ({date, formattedDate}) => {
          if (formattedDate) {
            input.value = formattedDate.split(".").reverse().join("-");
          }
        }
      });
    })
  }
}
