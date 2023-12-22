function media() {
  const video = document.querySelector(".background-video");
  const image = document.querySelector(".background-image");

  if (window.innerWidth < 600) {
    if (video) video.remove();
  } else {
    if (image) image.remove();
  }
}

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
media();
