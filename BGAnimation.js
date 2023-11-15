// Array of objects containing PNG images with their respective locations
const pngImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/768px-Question_mark_%28black%29.svg.png",
    location: {x: 100, y: 200},
    size: 40,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/768px-Question_mark_%28black%29.svg.png",
    location: {x: 200, y: 100},
    size: 70,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/768px-Question_mark_%28black%29.svg.png",
    location: {x: 200, y: 300},
    size: 50,
  },
  // Add more images and their locations as needed
];

function createImageElement(src, {x, y}, size) {
  const img = document.createElement("img");
  img.classList.add("bg-png");
  img.src = src;
  img.style.position = "absolute";
  img.style.width = `${size}px`;
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.zIndex = "-1";
  img.width = size;
  document.querySelector(".background-container").appendChild(img);
  return img;
}

function initialize() {
  pngImages.forEach(({src, location, size}) => {
    createImageElement(src, location, size);
  });
}

initialize();
