import { Circle } from "./circle.js";
import { Rectangle } from "./rectangle.js";
import { Shape } from "./shape.js";

//let shape = new Shape(3, 4);
//console.log(shape.x);
//console.log(shape.getInfo());

let circle = new Circle(12, 3, 5);
console.log(circle.getInfo());

let rectangle = new Rectangle(4, 5, 76, 5);
console.log(rectangle.getInfo());

let theShapes: Shape[] = [];
//theShapes.push(shape);
theShapes.push(circle);
theShapes.push(rectangle);

for (let tempShapes of theShapes) {
  console.log(tempShapes.getInfo());
  console.log(tempShapes.calculateArea());
}
