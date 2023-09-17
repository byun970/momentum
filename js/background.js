const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const url = `./img/${chosenImage}`;

console.log(url);

const bgImage = document.getElementById("background");

bgImage.style.backgroundImage = `url(${url})`;