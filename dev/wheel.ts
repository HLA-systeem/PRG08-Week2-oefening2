class Wheel {
    private carNum:number = 0;
    private TwoWheels:boolean = false;
                        
    constructor(x,y) {
        let HTMLElement = document.getElementsByClassName("car");

        let div = document.createElement("wheel");
        HTMLElement[this.carNum].appendChild(div);
        if(this.TwoWheels == true){
            this.carNum += 1;
            div.style.transform ="translate(" + x + "px," + y + "px)";
        }
    }
}
