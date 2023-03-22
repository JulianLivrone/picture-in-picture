const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // User selects which screen or window they want to share
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // We pass that media stream itno the video object as the src object
    videoElement.srcObject = mediaStream;
    // When that video has loaded it's metadata, it will call a function that will run the video
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    alert("There was an error");
  }
}

button.addEventListener("click", async () => {
  // Disabled button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// On load
selectMediaStream();
