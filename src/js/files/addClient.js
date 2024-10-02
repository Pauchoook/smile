import AirDatepicker from "air-datepicker";

export default function addClient() {
  const parentClients = document.querySelector("#clients");
  if (parentClients) {
    const btnAdd = createElement("button", [
      "btn",
      "btn-custom",
      "btn-custom--stroke"
    ], "btn-add-client");
    btnAdd.textContent = "Добавить пациента";

    btnAdd.addEventListener("click", (e) => {
      e.preventDefault();
      createClient();
    })

    createClient();

    function createClient() {
      const allClients = parentClients.querySelectorAll(".tax__client");
      const firstClient = parentClients.querySelector(".tax__client");
      const clientNumber = allClients.length + 1;

      const client = createElement("div", ["tax__client"], `client-${clientNumber}`);

      const clientTitle = createElement("h5", ["title", "tax__client-title"]);
      clientTitle.textContent = `Пациент ${clientNumber}`;
      client.appendChild(clientTitle);

      const wrapper = createElement("div", ["tax__form-wrapper"]);

      const nameClient = createInput(
        "Имя пациента",
        `name-client-${clientNumber}`,
        "Екатерина",
        clientNumber
      );
      wrapper.appendChild(nameClient);

      const patronimycClient = createInput(
        "Отчество пациента",
        `patronimyc-client-${clientNumber}`,
        "Максимовна",
        clientNumber
      );
      wrapper.appendChild(patronimycClient);

      const familyClient = createInput(
        "Фамилия пациента",
        `family-client-${clientNumber}`,
        "Кузнецова",
        clientNumber
      );
      wrapper.appendChild(familyClient);

      const dateClient = createInputDate(
        "Дата рождения",
        `date-client-${clientNumber}`,
        "дд.мм.гг",
        clientNumber
      );
      wrapper.appendChild(dateClient);

      const clientNav = document.createElement("div");
      clientNav.classList.add("tax__client-nav");
      clientNav.appendChild(btnAdd);

      if (allClients.length !== 0) {
        const deleteButton = createElement("button", [
          "btn",
          "btn-custom",
          "btn-custom--stroke",
          "_red",
          "tax__client-btn",
        ]);
        deleteButton.textContent = "Удалить";
        clientNav.appendChild(deleteButton);
        deleteButton.addEventListener("click", (e) => removeClient(e, client));
      }

      if (allClients.length && !firstClient.querySelector(".btn._red")) {
        const firstClientNav = firstClient.querySelector(".tax__client-nav");
        const deleteButton = createElement("button", [
          "btn",
          "btn-custom",
          "btn-custom--stroke",
          "_red",
          "tax__client-btn",
        ]);
        deleteButton.textContent = "Удалить";
        firstClientNav.appendChild(deleteButton);
        deleteButton.addEventListener("click", (e) => removeClient(e,firstClient));
      }

      client.appendChild(wrapper);
      client.appendChild(clientNav);
      parentClients.appendChild(client);

      const inputDate = document.querySelector(`#date-client-${clientNumber}`);
      const dateInput = new AirDatepicker(inputDate, {
        onSelect: ({ date, formattedDate }) => {
          if (formattedDate) {
            inputDate.value = formattedDate.split(".").reverse().join("-");
          }
        },
      });
    }

    function createInput(name, id, placeholder, number) {
      const input = createElement("div", ["tax__form-cell", "tax__form-cell--half"]);
      input.innerHTML = `
        <span class="tax__item-title">${name}</span>
        <label for="${id}">
          <input type="text" placeholder="${placeholder}" id="${id}" name="${name} ${number}" class="input" required />
        </label>
      `;

      return input;
    }

    function createInputDate(name, id, placeholder, number) {
      const input = createElement("div", ["tax__form-cell", "tax__form-cell--half"]);
      input.innerHTML = `
        <span class="tax__item-title">${name}</span>
        <label for="${id}">
          <input type="date" placeholder="${placeholder}" class="input input-date" id="${id}" name="${name} ${number}" required />
        </label>
        <svg class="icon-arrow">
          <use xlink:href="img/icons/icons.svg#icon-arrow-fill"></use>
        </svg>
      `;

      return input;
    }

    function createElement(el, classes, id) {
      const htmlEl = document.createElement(el);
      htmlEl.classList.add(...classes);

      if (id) htmlEl.id = id;

      return htmlEl;
    }

    function removeClient(e, client) {
      e.preventDefault();

      if (client.querySelector("#btn-add-client")) {
        const prevClient = client.previousElementSibling;
        const prevNav = prevClient.querySelector(".tax__client-nav");
        prevNav.prepend(btnAdd);
      }
      client.remove();

      const allClients = parentClients.querySelectorAll(".tax__client");
      allClients.forEach((client, index) => {
        const currentId = index + 1;
        client.id = `client-${currentId}`;

        const clientTitle = client.querySelector(".tax__client-title");
        clientTitle.textContent = `Пациент ${currentId}`;

        const labels = client.querySelectorAll("label");
        labels.forEach(label => {
          const newFor = label.getAttribute("for").slice(0, -1) + currentId;
          label.setAttribute("for", newFor);
        })

        const inputs = client.querySelectorAll(".input");
        inputs.forEach(input => {
          const newId = input.id.slice(0, -1) + currentId;
          const newName = input.name.slice(0, -1) + currentId;

          input.id = newId;
          input.name = newName;
        });

        if (currentId === 1 && allClients.length === 1) {
          const currentDeleteBtn = client.querySelector(".btn._red");
          currentDeleteBtn.remove();
        }
      })
    }
  }
}