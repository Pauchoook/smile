export default function tab() {
  const btnTabs = document.querySelectorAll(".btn-tab");

  if (btnTabs.length) {
    btnTabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const { tab: tabId } = btn.dataset;
        const parentTab = btn.closest(".parent-tab");
        const currentButtons = parentTab.querySelectorAll(".btn-tab");
        const tabs = parentTab.querySelectorAll(".tab");
        const currentTab = parentTab.querySelector(`.tab[data-tab=${tabId}]`);

        currentButtons.forEach((b) => b.classList.remove("active"));
        tabs.forEach((t) => t.classList.remove("open"));
        btn.classList.add("active");
        currentTab.classList.add("open");
      });
    });
  }
}