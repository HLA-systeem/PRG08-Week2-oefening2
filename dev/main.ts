/// <reference path="car.ts"/>
/// <reference path="util.ts"/>

class Game {
    public static instance:Game;
    private cars: Array<Car> = new Array<Car>();
    private rocks: Array<Rock> = new Array<Rock>();

    private constructor() {
        for (let i=0; i<6; i+=1) {
            let x = (Math.floor ((Math.random() * 100) + 1))*-2;
            let y = i*100 + 25;  
            this.cars.push(new Car(x,y));
            this.rocks.push(new Rock(y));
        }
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    public static getInstance(){
        if(Game.instance == null){
            Game.instance = new Game();
        }
        return Game.instance;
    }

    private gameLoop(){
        for (let i=0; i<6; i+=1) {
            Util.calculateCollision(this.cars[i],this.rocks[i]);
            this.cars[i].move();
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    public endGame(carX){
        if(carX >= 350){
            document.getElementById("score").innerHTML = "Score : 0";
        }
        else{
            document.getElementById("score").innerHTML = "Score : " + carX * 7;
        }
    }

} 


// load
window.addEventListener("load", function() {
    Game.getInstance();
});