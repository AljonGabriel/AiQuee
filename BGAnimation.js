// Array of objects containing PNG images with their respective locations
const pngImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/768px-Question_mark_%28black%29.svg.png",
    location: {x: 600, y: 50},
    delay: 1,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1310/1310190.png",
    location: {x: 1000, y: 400},
    delay: 2,
  },
  {
    src: "https://static.thenounproject.com/png/424728-200.png",
    location: {x: 700, y: 190},

    delay: 3,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/768px-Question_mark_%28black%29.svg.png",
    location: {x: 100, y: 400},
    delay: 4,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1310/1310190.png",
    location: {x: 400, y: 600},
    delay: 5,
  },
  {
    src: "https://static.thenounproject.com/png/424728-200.png",
    location: {x: 900, y: 300},
    delay: 6,
  },

  //

  {
    src: "https://cdn-icons-png.flaticon.com/512/1310/1310190.png",
    location: {x: 300, y: 100},
    delay: 6,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/768px-Question_mark_%28black%29.svg.png",
    location: {x: 850, y: 500},
    delay: 5,
  },
  {
    src: " https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/768px-Question_mark_%28black%29.svg.png",
    location: {x: 900, y: 100},

    delay: 4,
  },
  {
    src: "https://static.thenounproject.com/png/424728-200.png",
    location: {x: 200, y: 300},
    delay: 3,
  },
  {
    src: " https://static.thenounproject.com/png/424728-200.png",
    location: {x: 750, y: 600},
    delay: 2,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1310/1310190.png",
    location: {x: 500, y: 300},
    delay: 1,
  },
];

function createImageElement(src, {x, y}, delay) {
  const img = document.createElement("img");
  img.classList.add("bg-png");
  img.src = src;
  img.style.position = "absolute";
  img.style.boxSizing = "border-box";
  img.style.width = "50px";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.zIndex = "-1";
  img.style.opacity = "0.3";
  img.style.animationDelay = `${delay}s`;

  document.querySelector(".background-container").appendChild(img);
}

function initialize() {
  pngImages.forEach(({src, location, delay}) => {
    createImageElement(src, location, delay);
  });
}

initialize();
