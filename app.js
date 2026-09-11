const title = document.querySelector(".title");

const MAX_SIZE = 18;
const MIN_SIZE = 5;
const SCROLL_DISTANCE = 600;

let currentSize = MAX_SIZE;

function updateTitle() {
    const scroll = window.scrollY;

    const progress = Math.min(
        scroll / SCROLL_DISTANCE,
        1
    );

    const targetSize =
        MAX_SIZE -
        (MAX_SIZE - MIN_SIZE) * progress;

    currentSize +=
        (targetSize - currentSize) * 0.12;

    title.style.fontSize = `${currentSize}vw`;

    requestAnimationFrame(updateTitle);
}

updateTitle();