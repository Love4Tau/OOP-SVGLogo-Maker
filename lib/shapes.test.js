//import shapes for testing purposes

const {Triangle, Circle, Square} = require("./shapes");

//Test for triangle shape
test("Triangle render should return correct svg method and color", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon width="100%" height="100%" points="150,0 0,200 300,200" fill="blue" />');
})

test("Circle render should return correct svg method and color", () => {
    const shape = new Circle();
    shape.setColor("pink");
    expect(shape.render()).toEqual('<circle width="100%" height="100%" cx="150" cy="100" r="100" fill="pink" />');
})

test("Square render should return correct svg method and color", () => {
    const shape = new Square();
    shape.setColor("white");
    expect(shape.render()).toEqual('<rect x="0" y="0" width="300" height="200" fill="white" />');
})