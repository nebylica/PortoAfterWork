function pastEventButtons() {
  const pastEventCard = document.querySelectorAll(".past-event");
  pastEventCard.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("show")) {
        return;
      }

      pastEventCard.forEach((pastItem) => {
        pastItem.classList.remove("show");
      });
      item.classList.add("show");
    });
  });
}

pastEventButtons();
