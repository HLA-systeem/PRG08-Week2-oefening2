var Wheel = (function () {
    function Wheel(x, y) {
        this.carNum = 0;
        this.TwoWheels = false;
        var HTMLElement = document.getElementsByClassName("car");
        var div = document.createElement("wheel");
        HTMLElement[this.carNum].appendChild(div);
        if (this.TwoWheels == true)
            this.carNum += 1;
        div.style.transform = "translate(" + x + "px," + y + "px)";
    }
    return Wheel;
}());
var Car = (function () {
    function Car(x, y) {
        var _this = this;
        this.braking = false;
        this.width = 145;
        this.height = 45;
        var container = document.getElementById("container");
        this.div = document.createElement("car");
        container.appendChild(this.div);
        this.div.setAttribute("class", "car");
        new Wheel(20, 30);
        new Wheel(100, 30);
        this.x = x;
        this.y = y;
        var rando = Math.floor((Math.random() * 4) + 1);
        this.speed = rando;
        window.addEventListener("keyup", this.onKey.bind(this));
        this.div.addEventListener("click", function (e) { return _this.onClick(e); });
        this.move();
    }
    Car.prototype.getWidth = function () {
        return this.width;
    };
    Car.prototype.getHeight = function () {
        return this.height;
    };
    Car.prototype.getX = function () {
        return this.x;
    };
    Car.prototype.getY = function () {
        return this.y;
    };
    Car.prototype.setX = function (x) {
        this.x = x;
    };
    Car.prototype.setY = function (y) {
        this.x = y;
    };
    Car.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Car.prototype.move = function () {
        if (this.speed >= 0 && this.braking == true) {
            this.speed -= 1;
        }
        if (this.speed > 0) {
            this.x += this.speed;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Car.prototype.onKey = function (event) {
        console.log('keyPress');
        this.braking = true;
    };
    Car.prototype.onClick = function (event) {
        this.speed = 0;
        Game.instance.endGame(this.x);
    };
    return Car;
}());
var Util = (function () {
    function Util() {
    }
    Util.calculateCollision = function (ob1, ob2) {
        if (!!ob1.getX && !!ob2.getWidth) {
            if (ob1.getX() < ob2.getX() + ob2.getWidth() &&
                ob1.getX() + ob1.getWidth() > ob2.getX() &&
                ob1.getY() < ob2.getY() + ob2.getHeight() &&
                ob1.getHeight() + ob1.getY() > ob2.getY()) {
                ob1.setSpeed(0);
                Game.instance.endGame(0);
            }
        }
    };
    return Util;
}());
var Game = (function () {
    function Game() {
        this.cars = new Array();
        this.rocks = new Array();
        this.score = 0;
        for (var i = 0; i < 6; i += 1) {
            var x = (Math.floor((Math.random() * 100) + 1)) * -2;
            var y = i * 100 + 25;
            this.cars.push(new Car(x, y));
        }
        for (var i = 0; i < 12; i += 1) {
            var x = (Math.floor((Math.random() * 100) + 1)) * -2;
            var y = (Math.floor((Math.random() * (i * 100) + 1)));
            this.rocks.push(new Rock(y));
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.getInstance = function () {
        if (Game.instance == null) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.gameLoop = function () {
        for (var i = 0; i < 6; i += 1) {
            for (var i2 = 0; i2 < 12; i2 += 1) {
                Util.calculateCollision(this.cars[i], this.rocks[i2]);
            }
            this.cars[i].move();
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.endGame = function (carX) {
        this.score += carX;
        console.log(carX);
        if (carX == 0) {
            this.score = 0;
        }
        document.getElementById("score").innerHTML = "Score : " + this.score * 7;
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Rock = (function () {
    function Rock(y) {
        this.width = 62;
        this.height = 62;
        var container = document.getElementById("container");
        this.div = document.createElement("rock");
        container.appendChild(this.div);
        this.div.setAttribute("class", "rock");
        this.x = this.x = (Math.floor((Math.random() * 100) + 1)) + 490;
        this.y = y;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
    Rock.prototype.getWidth = function () {
        return this.width;
    };
    Rock.prototype.getHeight = function () {
        return this.height;
    };
    Rock.prototype.getX = function () {
        return this.x;
    };
    Rock.prototype.getY = function () {
        return this.y;
    };
    return Rock;
}());
//# sourceMappingURL=main.js.map