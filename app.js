const text = document.querySelector(".fixed");

const maxSize = 18;
const minSize = 5;
const scrollDistance = 600;
const smoothness = 0.5

let currentSize = maxSize;
let targetSize = maxSize;

function update() {
    const progress = Math.min(window.scrollY / scrollDistance, 1);

    targetSize = maxSize - (maxSize - minSize) * progress;

    currentSize += (targetSize - currentSize) * smoothness;

    text.style.fontSize = `${currentSize}vw`;

    requestAnimationFrame(update);
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
update();
