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

//Create function to write data to file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err)
        }
            console.log("Success!")
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

    shape_color = userInput["color-shape"];

    shape_type = userInput.shape;

    console.log(text_color + shape_color + shape_type);
}

init();