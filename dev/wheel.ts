class Wheel {
                        
    constructor(x,y) {
        // het DOM element waar de div in geplaatst wordt:
        let container:HTMLElement = document.getElementById("car");

        let div = document.createElement("wheel");
        container.appendChild(div);

        div.style.transform ="translate(" + x + "px," + y + "px)";
    }
}