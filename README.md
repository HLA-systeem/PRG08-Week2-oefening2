# PRG08-Week2-oefening2

# https://hla-systeem.github.io/PRG08-Week2-oefening2/index.html

## Opdracht 

- Ga verder met de code van 'Close Call' uit Week 2 oefening 1
- Gebruik de 'road' achtergrond in plaats van de cliff. Het wolkje kan weg uit index.html
- Laat 6 auto's netjes onder elkaar van links buiten het scherm het beeld inrijden. Elke auto heeft een random speed en start x positie.
- Er staan 12 rotsen random verdeeld over de rechterhelft van het scherm. De rots heeft geen speed meer.
- Gebruik **Arrays** in Game.ts om de cars en rocks in op te slaan!
- Gebruik een **For Of** loop om in Game.ts de `move()` functie van de cars aan te roepen. Zie voorbeeldcode.

## Opdracht

- Game.ts krijgt een score property
- De game loop checkt voor elke auto of die botst met een van de 12 rotsen. 
- Als je op een auto klikt gaat de auto afremmen.
- Zodra een auto stil staat zonder te botsen met een rots, wordt de x positie van de auto bij je score opgeteld.
- De rots hoeft niet meer te bewegen bij een botsing.
- Zodra een auto een rots raakt gaat je score naar 0

## Resultaat

![CloseCall2](closecall2.png?raw=true "UML")

## Voorbeeldcode

### For Of Loop

```
let cars : Array<Car> = new Array<Car>();
cars.push(new Car());

for (let c of cars) {
   console.log("car position is " + c.x);
}
```

### Click Listener

```
class Test {
    constructor(){
        let div = document.createElement("div");
        document.body.appendChild(div);

        div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
    }
    private onClick(e:MouseEvent):void {
        console.log("Clicked!");
    }
}
```

