class Rock {
    private div:HTMLElement;
    private x: number;
    private y: number;
    private width:number = 62;

    public getWidth():number{
        return this.width;
    }

    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.x;
    }
                        
    constructor(y){
        let container:HTMLElement = document.getElementById("container"); // het DOM element waar de div in geplaatst wordt:
        this.div = document.createElement("rock");
        container.appendChild(this.div);
        this.div.setAttribute("id", "rock");

        this.x = this.x = (Math.floor ((Math.random() * 100) + 1)) + 490;
        this.y = y;
        this.div.style.transform ="translate(" + this.x + "px," + this.y + "px)";   
    }
}