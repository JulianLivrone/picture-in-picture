# Picture in Picture

This is a web application that allows users to capture their screen or window and play it in the browser.

## Features

- Let's you stream a screen or window while navigation through other screen or window.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

1. Clone or download the repository
2. Open `index.html` in your preferred web browser

## Usage

The project uses the navigator.mediaDevices API to prompt the user to select a media stream, which in this case is their screen or window. The selected media stream is then passed into a video element and played in the browser.

The video element is also equipped with a requestPictureInPicture() method that allows the user to enable picture in picture mode.
