/**
 * 
 * falling circles
 * 
 */


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

class Circle {
    constructor(x, y, dy, radius) {    
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.radius = radius;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.fillStyle = 'white';
    }

    update() {
        this.draw();
    
        if (this.y + (this.radius * 2) > canvas.height) {
            if (this.dy > 0) {
                this.dy = -(this.dy / 1.5);            
            }
            if (this.dy > -2 && this.dy < 0) {
                this.dy = 0
            }            
        }
        if (this.dy === 0) {
            if (this.x > canvas.width / 2) {
                this.x += 2;
            } else {
                this.x -= 2;
            }
            if (this.x < 0 || this.x > canvas.width) {
                this.x = -50;
            }
        }

        this.y += this.dy;
        this.dy++;
    }
}


function getRandomNumberInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let x, y, dy, radius, circleArray = [];

for (let i = 0; i < 5; i++) {
    x = getRandomNumberInRange(50, canvas.width);
    y = getRandomNumberInRange(50, canvas.height - 50);
    radius = getRandomNumberInRange(5, 10);
    dy = 0.01;
    circleArray.push(new Circle(x, y, dy, radius));
}

function animateCircles() {
    requestAnimationFrame(animateCircles);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let circle of circleArray) {
        circle.update();
    }
}

animateCircles();

// c.beginPath();
// c.moveTo(50, 50);
// c.lineTo(350, canvas.height);
// c.stroke();
// c.strokeStyle = 'white';