const slider = document.querySelector(".slider");
const images = [
  "url('image1.jpg')", // Replace with your image paths
  "url('image2.jpg')",
  "url('image3.jpg')",
  "url('image4.jpg')",
];

let currentSlideIndex = 0;

function showSlide() {
  slider
    .querySelectorAll("img")
    .forEach((img) => img.classList.remove("active"));

  const newSlide = document.createElement("img");
  newSlide.style.backgroundImage = images[currentSlideIndex];
  newSlide.classList.add("active");
  slider.appendChild(newSlide);

  currentSlideIndex = (currentSlideIndex + 1) % images.length;

  setTimeout(showSlide, 3000); // Change time as needed (in milliseconds)
}

showSlide();
