var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Mouse event management
var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 2;
var circleColors = ['rgba(2, 184, 2, 0.3)', 'rgba(2, 184, 181, 0.3)', 'rgba(184, 2, 93, 0.3)'];

window.addEventListener('mousemove', function() {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = circleColors[Math.floor((Math.random() * circleColors.length))];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.fillStyle = this.color;
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
            
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var x, y, dx, dy, radius, circleArray = [];

function init() {
    circleArray = [];
    for (let i = 0; i < 200; i++) {
        radius = Math.random() * 5 + 1;
        x = Math.random() * (innerWidth - radius) + radius;
        y = Math.random() * (innerHeight - radius) + radius;
        dx = (Math.random() - 0.5);
        dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let circle of circleArray) {
        circle.update();
    }
}

init();