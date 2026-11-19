const container = document.querySelector(".container");
const allowedSpace = document.querySelector(".allowed-space");
const movableElement = document.querySelector("#movable-element");
const border = 40;

let x = 0;
let y = 0;

const speed = 20;

function moveElement() {
    movableElement.style.left = x + "px";
    movableElement.style.top = y + "px";

}
// Klikk for å posisjonere elementet
container.addEventListener("click", (e) => {
    x = e.clientX - movableElement.offsetWidth - border;
    y = e.clientY - movableElement.offsetHeight / 2;
    checkBoundaries();
    moveElement();
});

function checkBoundaries() {
    const maxX = container.clientWidth - movableElement.offsetWidth;
    const maxY = container.clientHeight - movableElement.offsetHeight;

    const minX = border
    const minY = border;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    if (y >= maxY - border || x > maxX - border || x < minX || y < minY) {
        movableElement.innerHTML = '<img src="./assets/images/dizzy.png" width="200" alt="svimmel smiley">';
        allowedSpace.style.border = '2px solid red';
    } else {
        movableElement.innerHTML = '<img src="./assets/images/happy.png" width="200" alt="glad smiley">';
        allowedSpace.style.border = '2px solid black';

    }

    console.log(x, y);
}

// Arrows directioons
document.addEventListener("keydown", (e) => {

    switch (e.key) {
        case "ArrowUp":
            y -= speed;
            console.log("up");
            break;

        case "ArrowDown":
            console.log("down");
            y += speed;
            break;

        case "ArrowLeft":
            x -= speed;
            console.log("left");
            break;

        case "ArrowRight":
            x += speed;
            console.log("right");
            break;
    }

    checkBoundaries();
    moveElement();
});


// Hvis vinduet endrer størrelse
window.addEventListener("resize", () => {
    checkBoundaries();
    moveElement();
});