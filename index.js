// import inquirer
const inquirer = require("inquirer");
//import shapes
const {Triangle, Circle, Square} = require("./lib/shapes")

//import fs
const fs = require("fs");

//Create questions to prompt user for input

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to 3 characters:",
    },

    {
        type: "input",
        name: "color",
        message: "Please enter a color keyword (OR a hexadecimal number) for text:",
    },

    {
        type: "list",
        name: "shape",
        message: "Please choose a shape for your SVG logo:",
        choices: ["Triangle","Circle","Square"],
    },
    
    {
        type: "input",
        name: "color-shape",
        message: "Please enter a color keyword (OR a hexadecimal number) for shape:"
    },
    
]

//Create svg class

class SVG {

    textElm = ""
    shapeElm = ""

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElm}${this.textElm}</svg>`
    }
    
    setTextElem(text, color) {
        this.textElm = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${color}" font-size="35">${text}</text>`
    }

    setShapeElem(shape){
        this.shapeElm = shape.render();
    }
}

//Create function to write data to file

function writeDataToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err)
        }
            console.log("Generated logo.svg!")
    })
}

async function init() {
    const userInput = await inquirer.prompt(questions);

    console.log(userInput);

    //check user text input length
    var user_input = "";
    if(userInput.text.length > 0 && userInput.text.length < 4){
        user_input = userInput.text;
    } else {
        console.log("Invalid entry. Please enter THREE characters.")
    return;
    }

    text_color = userInput.color;

    user_shape_color = userInput["color-shape"];

    user_shape = userInput.shape;

    // console.log(text_color + user_shape_color + user_shape);

    let shape_type;

    if(user_shape === "Triangle") {
        shape_type = new Triangle();
    } else if (user_shape === "Circle") {
        shape_type = new Circle();
    } else {
        shape_type = new Square();
    }
    shape_type.setColor(user_shape_color)

    var svg = new SVG();
    var svgContent = "";
    var svgFile = "logo.svg"
    svg.setTextElem(user_input, text_color);
    svg.setShapeElem(shape_type);
    svgContent = svg.render();

    writeDataToFile(svgFile, svgContent)
}

init();