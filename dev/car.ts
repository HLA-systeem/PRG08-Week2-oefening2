/// <reference path="wheel.ts"/>

class Car {

    public static speed:number;
    private div:HTMLElement;
    private braking:boolean = false;
    private x: number;
    private y: number;
    private width:number = 145;

    public getWidth():number{
        return this.width;
    }

    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.y;
    }

    public setX(x:number):void{
        this.x = x;
    }

    public setY(y:number):void{
        this.x = y;
    }
            
    constructor(x:number,y:number) {
        let container:HTMLElement = document.getElementById("container"); // het DOM element waar de div in geplaatst wordt:
        this.div = document.createElement("car");
        container.appendChild(this.div);
        this.div.setAttribute("id", "car");

        new Wheel(20,30);
        new Wheel(100,30);

        this.x = x;
        this.y = y;

        let rando = Math.floor ((Math.random() * 4) + 1);
        Car.speed = rando;

        window.addEventListener("keyup", this.onKey.bind(this));
        this.move();
    }

    public move():void {
        if(Car.speed >=0 && this.braking == true){
            Car.speed -= 1;
        }

        if(this.x >= 350){
            Car.speed = 0;
            Game.instance.endGame(this.x);
        }


        if(Car.speed > 0){
            this.x += Car.speed;
        }
        else{
            Game.instance.endGame(this.x);
        }
        
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
    } 

    private onKey(event:KeyboardEvent):void {
        console.log('keyPress');
        this.braking = true;
    }
}