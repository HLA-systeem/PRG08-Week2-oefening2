/// <reference path="car.ts"/>
/// <reference path="util.ts"/>

class Game {
    public static instance:Game;
    private cars: Array<Car> = new Array<Car>();
    private rocks: Array<Rock> = new Array<Rock>();
    private score: number = 0;

    private constructor() {
        for (let i=0; i<6; i+=1) {
            let x = (Math.floor ((Math.random() * 100) + 1))*-2;
            let y = i*100 + 25;  
            this.cars.push(new Car(x,y));
        }

        for (let i=0; i<12; i+=1) {
            let x = (Math.floor ((Math.random() * 100) + 1))*-2;
            let y = (Math.floor ((Math.random() * (i*100)+ 1)));  
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
            for (let i2=0; i2<12; i2+=1) {
                Util.calculateCollision(this.cars[i],this.rocks[i2]);
                }
            this.cars[i].move();
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    public endGame(carX){
        this.score += carX;
        console.log(carX);
        if(carX == 0){
            this.score = 0;
        }
        document.getElementById("score").innerHTML = "Score : " + this.score * 7;
        
    }

} 


// load
window.addEventListener("load", function() {
    Game.getInstance();
});