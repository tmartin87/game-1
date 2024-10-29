class Enemy {
    static classes = ["enemy1","enemy2","enemy3"]
  constructor() {

    this.element = document.createElement("div");
    this.element.classList.add(Enemy.classes[Math.floor(Math.random()*3)]);
    myGame.element.appendChild(this.element);
    this.positionLeft = 1400;
    this.speed = 5;
    this.isActive = true;
    this.move();
    
  }

  getBounds() {
    return this.element.getBoundingClientRect();
  }

  move() {
    if (player.isActive) {
      const animate = () => {
        if (this.positionLeft <= 0) {
          this.element.remove();
        }

        this.positionLeft -= this.speed;
        this.element.style.left = this.positionLeft + "px";

        if (this.isActive) {
          requestAnimationFrame(animate);
        }
      };

      if (this.isActive) {
        requestAnimationFrame(animate);
      }
    }
  }

  stop() {
    this.isActive = false;
    this.speed = 0;
  }
}

const enemies = [];

const enemyInterval = setInterval(() => {
  enemies.push(new Enemy());
}, 4000);
