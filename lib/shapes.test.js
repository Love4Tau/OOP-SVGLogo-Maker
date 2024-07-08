//import shapes for testing purposes

const {Triangle, Circle, Square} = require("./shapes");

//Test for triangle shape
test("Triangle render should return correct svg method and color", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon width="100%" height="100%" points="50,0 100,100 0,100" fill="blue" />');
})

test("Circle render should return correct svg method and color", () => {
    const shape = new Circle();
    shape.setColor("pink");
    expect(shape.render()).toEqual('<circle width="100%" height="100%" cx="50" cy="50" r="40" fill="pink" />');
})

test("Square render should return correct svg method and color", () => {
    const shape = new Square();
    shape.setColor("white");
    expect(shape.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="white" />');
})