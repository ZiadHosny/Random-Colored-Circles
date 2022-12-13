document.querySelector('body').style.margin = 0;
document.querySelector('body').style.overflow = 'hidden'

const canvasDOM = document.querySelector('canvas');

const WIDTH = (canvasDOM.width = innerWidth);
const HEIGHT = (canvasDOM.height = innerHeight);

const canvas = canvasDOM.getContext('2d');

const circleArray = [];
const colorArray = [
    'white',
    'cornsilk',
    'fuchsia',
    'chocolate',
    'cornflowerblue',
    'crimson',
    'rebeccapurple',
    'darkviolet',
    'darkgoldenrod',
    'white',
    'forestgreen',
    'aquamarine',
    'lightslategrey',
    'blue',
    'black',
    'chartreuse',
    'aliceblue',
    'darkmagenta'
];

class DrawCircle {
    constructor(x, y, r, dx, dy) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
    }
    draw() {
        canvas.beginPath();
        canvas.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
        canvas.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        canvas.fill();
        if (this.x + this.r > WIDTH || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > HEIGHT || this.y - this.r < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        canvas.beginPath();
        canvas.font = '50px Arial';
        canvas.fillText('ZiadHosny', 100, 100);
    };
}

const animation = () => {
    'use strict';
    canvas.fillStyle = 'black';
    canvas.fillRect(0, 0, WIDTH, HEIGHT);
    for (let i = 0; i < circleArray.length; i += 1) {
        circleArray[i].draw();
    }
    requestAnimationFrame(animation);
}


const init = () => {

    animation()
    for (let i = 0; i < 500; i += 1) {
        const r = Math.random() * 20;
        const dx = Math.random() * 2;
        const dy = Math.random() * 3;
        const x = Math.random() * (WIDTH - 2 * r) + r;
        const y = Math.random() * (HEIGHT - 2 * r) + r;
        circleArray.push(new DrawCircle(x, y, r, dx, dy));
    }
}

init();