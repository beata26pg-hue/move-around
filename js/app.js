const container = document.querySelector(".container");
const allowedSpace = document.querySelector(".allowed-space");
const movableElement = document.querySelector("#movable-element");

let x = allowedSpace.clientLeft;
let y = allowedSpace.clientTop;

const speed = 20;

function moveElement() {
    movableElement.style.left = x + "px";
    movableElement.style.top = y + "px";

}
// Position element on click inside
container.addEventListener("click", (e) => {

    const rect = allowedSpace.getBoundingClientRect();

    x = e.clientX - rect.left - movableElement.offsetWidth / 2;
    y = e.clientY - rect.top - movableElement.offsetHeight / 2;

    checkBoundaries();
    moveElement();
});

function checkBoundaries() {

    const minX = allowedSpace.clientLeft;
    const minY = allowedSpace.clientTop;

    const maxX = allowedSpace.clientWidth - movableElement.offsetWidth;
    const maxY = allowedSpace.clientHeight - movableElement.offsetHeight;

    x = Math.max(-15, x);
    y = Math.max(-15, y)

    x = Math.min(maxX + 15, x);
    y = Math.min(maxY + 15, y);

    if (y >= maxY || x > maxX || x < minX || y < minY) {
        movableElement.innerHTML = '<img src="./assets/images/dizzy.png" width="200" alt="svimmel smiley">';
        allowedSpace.style.border = '2px solid red';
    } else {
        movableElement.innerHTML = '<img src="./assets/images/happy.png" width="200" alt="glad smiley">';
        allowedSpace.style.border = '2px solid grey';
    }
}

// Arrows directioons
document.addEventListener("keydown", (e) => {

    switch (e.key) {
        case "ArrowUp":
            y -= speed;
            break;

        case "ArrowDown":
            y += speed;
            break;

        case "ArrowLeft":
            x -= speed;
            break;

        case "ArrowRight":
            x += speed;
            break;
    }

    checkBoundaries();
    moveElement();
});


window.addEventListener("resize", () => {
    checkBoundaries();
    moveElement();
});