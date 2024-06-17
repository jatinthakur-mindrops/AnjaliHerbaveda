const frames = [];
const totalFrames = 10; // Adjust this to the total number of frames you have
const frameDuration = 100; // Duration for each frame in milliseconds

// Load frames
for (let i = 0; i < totalFrames; i++) {
  const frame = new Image();
  frame.src = `frames/frame_${String(i).padStart(4, "0")}.png`;
  frame.classList.add("frame");
  frames.push(frame);
}

// Append frames to the container
const container = document.querySelector(".animation-container");
frames.forEach((frame) => container.appendChild(frame));

// Show the first frame initially
frames[0].style.display = "block";

// Function to display the next frame
let currentFrame = 0;
function nextFrame() {
  frames[currentFrame].style.display = "none";
  currentFrame = (currentFrame + 1) % totalFrames;
  frames[currentFrame].style.display = "block";
}

// Set interval to switch frames
setInterval(nextFrame, frameDuration);
