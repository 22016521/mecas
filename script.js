function scrollToLanding() {
  document.getElementById('landing').scrollIntoView({
    behavior: 'smooth'
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".image-background img");
  let currentIndex = 0; // Start with the first image

  function showNextSlide() {
    // Remove 'active' class from the current image
    slides[currentIndex].classList.remove("active");

    // Calculate the index of the next image
    currentIndex = (currentIndex + 1) % slides.length;

    // Add 'active' class to the next image
    slides[currentIndex].classList.add("active");
  }

  // Set the first image as active initially
  slides[currentIndex].classList.add("active");

  // Change slides every 4 seconds
  setInterval(showNextSlide, 3000);
});



document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("likeBtn")
    .addEventListener("click", function () {
      document.getElementById("feedbackMessage").innerText =
        "Thank you for your feedback! You liked this content.";
    });

  document
    .getElementById("dislikeBtn")
    .addEventListener("click", function () {
      document.getElementById("feedbackMessage").innerText =
        "Thank you for your feedback! You disliked this content.";
    });
});



