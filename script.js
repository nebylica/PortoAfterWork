function setDynamicBackground() {
  const backgroundImage = document.querySelector(".background-image");
  const backgroundVideo = document.querySelector(".background-video");

  if (window.innerWidth < 600) {
    backgroundImage.style.display = "block";
    backgroundVideo.style.display = "none";
    backgroundVideo.pause();
    backgroundVideo.currentTime = 0;
  } else {
    backgroundImage.style.display = "none";
    backgroundVideo.style.display = "block";
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

setDynamicBackground();
pastEventButtons();
