class Wheel {
    private static carCount:number = 0;
    private static wheelCount:number = 0;
    private TwoWheels:boolean = false;
                        
    constructor(x,y) {
        let HTMLElement = document.getElementsByClassName("car");
        let div = document.createElement("wheel");
        HTMLElement[Wheel.carCount].appendChild(div);

        Wheel.wheelCount+=1;
        if(Wheel.wheelCount == 2){
            Wheel.wheelCount = 0;
            Wheel.carCount += 1;
        }
        div.style.transform ="translate(" + x + "px," + y + "px)";
    }
}