/// <reference path="wheel.ts"/>

class Car {

    private speed:number;
    private div:HTMLElement;
    private braking:boolean = false;
    private x: number;
    private y: number;
    private width:number = 145;
    private height:number = 45;

    public getWidth():number{
        return this.width;
    }

    public getHeight():number{
        return this.height;
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

    public setSpeed(speed:number):void{
        this.speed = speed;
    }

            
    constructor(x:number,y:number) {
        let container:HTMLElement = document.getElementById("container"); // het DOM element waar de div in geplaatst wordt:
        this.div = document.createElement("car");
        container.appendChild(this.div);
        this.div.setAttribute("class", "car");

        new Wheel(20,30);
        new Wheel(100,30);

        this.x = x;
        this.y = y;

        let rando = Math.floor ((Math.random() * 4) + 1);
        this.speed = rando;

        window.addEventListener("keyup", this.onKey.bind(this));
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e)); //bind is the old way, => is the moder way

        this.move();
    }

    public move():void {
        if(this.speed >=0 && this.braking == true){
            this.speed -= 1;
        }

        if(this.speed > 0){
            this.x += this.speed;
        }

        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";
    } 

    private onKey(event:KeyboardEvent):void {
        console.log('keyPress');
        this.braking = true;
    }

    private onClick(event:MouseEvent):void {
        this.speed = 0;
        Game.instance.endGame(this.x);
    }
}